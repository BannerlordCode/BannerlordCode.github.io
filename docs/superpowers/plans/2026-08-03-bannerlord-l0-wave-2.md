# Bannerlord 1.4.5 L0 Handwritten Wave 2

## Goal

Replace the 1.4.5 `InformationManager`, `CampaignTime`, and `IDataStore` automatic-reference shells with source-backed Chinese and English deep pages. Preserve routes, write no generated prose, and keep the repository's existing unrelated worktree changes.

## Global Constraints

- Read `bannerlord-1.4.5/Bannerlord.Source/bin` as the semantic authority and inspect real call sites before writing.
- Replace each page body; do not patch a signature shell into apparent completeness.
- Each page needs a real mental model, when/when-not guidance, ownership/dependency chain, lifecycle/save or UI risks, public-member behavior, a real C# acquisition/use example, and reciprocal navigation.
- Use real APIs and values. No `SomeValue`, `service = ...`, `IIDataStore`, or ellipsis placeholders.
- Keep Chinese and English aligned in technical meaning, not merely in signatures.
- Do not commit; leave the active overall goal open because R1 remains incomplete.

## Task 1: Handwrite the three L0 page pairs

Files:

- `content/v1.4.5/zh/api/core-extra/InformationManager.md`
- `content/v1.4.5/en/api/core-extra/InformationManager.md`
- `content/v1.4.5/zh/api/campaign/CampaignTime.md`
- `content/v1.4.5/en/api/campaign/CampaignTime.md`
- `content/v1.4.5/zh/api/campaign/IDataStore.md`
- `content/v1.4.5/en/api/campaign/IDataStore.md`

Sources and call-site families:

- `TaleWorlds.Library/InformationManager.cs`, `InformationMessage`, `InquiryData`, `TextInquiryData`, tooltip registration and UI/ViewModel consumers.
- `TaleWorlds.CampaignSystem/CampaignTime.cs`, campaign tick/daily/hourly scheduling, `CampaignTime.Never`, `CampaignTime.Zero`, and save/load timing callers.
- `TaleWorlds.CampaignSystem/IDataStore.cs`, `CampaignBehaviorBase.SyncData`, `CampaignBehaviorDataStore`, save system adapters, and versioned field/schema risks.

Acceptance:

- All six files classify as `deep_pass`.
- No reject phrases, generated descriptions, fake acquisition code, or empty examples.
- Every link resolves under `node tools/audit-links.mjs`.
- The pages add the qualified identities to the 1.4.5 handwritten coverage reports; do not claim full R1 completion.

## Task 2: Review and evidence

- Inspect the author diff against the three source families and check Chinese/English semantic parity.
- Run six-page classification and forbidden-token scans.
- Refresh 1.4.5 zh/en coverage serially, then run both reports in `--check` mode.
- Run `npm test`, quality, body-writer, navigation, section-tree, page-navigation, and link audits.
- Record any Zola build limitation separately from content correctness.
