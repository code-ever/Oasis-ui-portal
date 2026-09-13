import React, { useState } from "react";
import Button from "./Button";

const classes = [
  "Early Years (Ages 2–5)",
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
];

const initialState = {
  childName: "",
  dob: "",
  gender: "",
  classApplying: "",
  previousSchool: "",
  guardianName: "",
  guardianPhone: "",
  guardianEmail: "",
  address: "",
  medicalInfo: "",
  emergencyContact: "",
  message: "",
};

const steps = ["Child Information", "Parent/Guardian Information", "Additional Information"];

function validateStep(step, values) {
  const errors = {};
  if (step === 0) {
    if (!values.childName.trim()) errors.childName = "Child's full name is required.";
    if (!values.dob) errors.dob = "Date of birth is required.";
    if (!values.gender) errors.gender = "Please select a gender.";
    if (!values.classApplying) errors.classApplying = "Please select a class.";
  }
  if (step === 1) {
    if (!values.guardianName.trim()) errors.guardianName = "Parent/guardian name is required.";
    if (!values.guardianPhone.trim()) errors.guardianPhone = "Phone number is required.";
    if (!values.guardianEmail.trim()) {
      errors.guardianEmail = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.guardianEmail)) {
      errors.guardianEmail = "Please enter a valid email address.";
    }
    if (!values.address.trim()) errors.address = "Address is required.";
  }
  if (step === 2) {
    if (!values.emergencyContact.trim())
      errors.emergencyContact = "An emergency contact is required.";
  }
  return errors;
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="mb-1 block font-[Inter] text-sm font-medium text-[#152A54]">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function AdmissionForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const inputClass = (name) =>
    `w-full rounded-xl border px-4 py-3 font-[Inter] text-sm text-[#22262B] outline-none transition-colors focus:border-[#4FA8DA] ${
      errors[name] ? "border-red-400" : "border-[#152A54]/15"
    }`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const goNext = () => {
    const stepErrors = validateStep(step, values);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };

  const goPrevious = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stepErrors = validateStep(step, values);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    setStatus("submitting");
    // Mock submission — wire this up to a real endpoint once a backend is available.
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center">
        <h3 className="font-[Poppins] text-xl font-semibold text-green-800">
          Application Submitted!
        </h3>
        <p className="mt-2 font-[Inter] text-sm text-green-700">
          Thank you for applying to Oasis Primary School. Our
          admissions team will review your application and contact you within 3–5
          working days.
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setValues(initialState);
            setStep(0);
            setStatus("idle");
          }}
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="mb-8 flex items-center gap-3">
        {steps.map((label, i) => (
          <React.Fragment key={label}>
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full font-[Poppins] text-sm font-semibold ${
                  i <= step ? "bg-[#152A54] text-white" : "bg-[#152A54]/10 text-[#152A54]/50"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`hidden font-[Inter] text-sm font-medium sm:inline ${
                  i <= step ? "text-[#152A54]" : "text-[#8A93A3]"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && <div className="h-px flex-1 bg-[#152A54]/10" />}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {step === 0 && (
          <div className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Child's Full Name" error={errors.childName}>
                <input
                  name="childName"
                  value={values.childName}
                  onChange={handleChange}
                  className={inputClass("childName")}
                  placeholder="e.g. Chidera Nwosu"
                />
              </Field>
              <Field label="Date of Birth" error={errors.dob}>
                <input
                  type="date"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  className={inputClass("dob")}
                />
              </Field>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Gender" error={errors.gender}>
                <select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className={inputClass("gender")}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Field>
              <Field label="Class Applying For" error={errors.classApplying}>
                <select
                  name="classApplying"
                  value={values.classApplying}
                  onChange={handleChange}
                  className={inputClass("classApplying")}
                >
                  <option value="">Select class</option>
                  {classes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Previous School (if any)">
              <input
                name="previousSchool"
                value={values.previousSchool}
                onChange={handleChange}
                className={inputClass("previousSchool")}
                placeholder="Name of previous school"
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <Field label="Parent/Guardian Name" error={errors.guardianName}>
              <input
                name="guardianName"
                value={values.guardianName}
                onChange={handleChange}
                className={inputClass("guardianName")}
                placeholder="e.g. Mrs. Ngozi Nwosu"
              />
            </Field>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Phone Number" error={errors.guardianPhone}>
                <input
                  name="guardianPhone"
                  value={values.guardianPhone}
                  onChange={handleChange}
                  className={inputClass("guardianPhone")}
                  placeholder="+234 XXX XXX XXXX"
                />
              </Field>
              <Field label="Email" error={errors.guardianEmail}>
                <input
                  name="guardianEmail"
                  value={values.guardianEmail}
                  onChange={handleChange}
                  className={inputClass("guardianEmail")}
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <Field label="Home Address" error={errors.address}>
              <input
                name="address"
                value={values.address}
                onChange={handleChange}
                className={inputClass("address")}
                placeholder="Street, city, state"
              />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <Field label="Medical Information (allergies, conditions, etc.)">
              <textarea
                name="medicalInfo"
                value={values.medicalInfo}
                onChange={handleChange}
                rows={3}
                className={inputClass("medicalInfo")}
                placeholder="Optional — let us know anything we should be aware of"
              />
            </Field>
            <Field label="Emergency Contact" error={errors.emergencyContact}>
              <input
                name="emergencyContact"
                value={values.emergencyContact}
                onChange={handleChange}
                className={inputClass("emergencyContact")}
                placeholder="Name and phone number"
              />
            </Field>
            <Field label="Message (optional)">
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={3}
                className={inputClass("message")}
                placeholder="Anything else you'd like us to know?"
              />
            </Field>
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          {step > 0 ? (
            <Button type="button" variant="ghost" onClick={goPrevious}>
              Previous
            </Button>
          ) : (
            <span />
          )}

          {step < steps.length - 1 ? (
            <Button type="button" onClick={goNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AdmissionForm;
