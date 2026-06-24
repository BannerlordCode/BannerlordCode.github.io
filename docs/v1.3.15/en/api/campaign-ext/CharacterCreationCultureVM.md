<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationCultureVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCultureVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCultureVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs`

## Overview

`CharacterCreationCultureVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Culture` | `public CultureObject Culture { get; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ShortenedNameText` | `public string ShortenedNameText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Feats` | `public MBBindingList<CharacterCreationCultureFeatVM> Feats { get; set; }` |

## Key Methods

### ExecuteSelectCulture
`public void ExecuteSelectCulture()`

**Purpose:** Executes the `select culture` operation or workflow.

## Usage Example

```csharp
var value = new CharacterCreationCultureVM();
value.ExecuteSelectCulture();
```

## See Also

- [Complete Class Catalog](../catalog)