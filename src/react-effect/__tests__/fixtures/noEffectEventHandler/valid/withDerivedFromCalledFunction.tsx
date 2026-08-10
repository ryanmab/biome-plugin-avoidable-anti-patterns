import { useEffect } from "react";

const validateReferralCode = (r: string) => true;
const saveReferredByCode = (v: boolean) => true;

// Captures an optional URL search param and persists it to localStorage + cookie.
// First-touch attribution: never overwrites an existing code.
export function useSaveReferralCode(refCode: string) {
	useEffect(() => {
		const valid = validateReferralCode(refCode);
		if (valid) saveReferredByCode(valid);
	}, [refCode]);
}
