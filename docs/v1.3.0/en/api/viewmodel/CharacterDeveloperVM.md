<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDeveloperVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs`

## Overview

`CharacterDeveloperVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentCharacterNameText` | `public string CurrentCharacterNameText { get; set; }` |
| `CurrentCharacter` | `public CharacterDeveloperHeroItemVM CurrentCharacter { get; set; }` |
| `CharacterList` | `public SelectorVM<SelectorItemVM> CharacterList { get; set; }` |
| `FocusVisualHint` | `public HintViewModel FocusVisualHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `IsPlayerAccompanied` | `public bool IsPlayerAccompanied { get; set; }` |
| `UnspentCharacterPointsText` | `public string UnspentCharacterPointsText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `PartyRoleText` | `public string PartyRoleText { get; set; }` |
| `UnspentCharacterPointsHint` | `public HintViewModel UnspentCharacterPointsHint { get; set; }` |
| `UnspentAttributePointsHint` | `public HintViewModel UnspentAttributePointsHint { get; set; }` |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint { get; set; }` |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `SkillFocusText` | `public string SkillFocusText { get; set; }` |
| `AddFocusText` | `public string AddFocusText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `UnopenedPerksNumForOtherChars` | `public int UnopenedPerksNumForOtherChars { get; set; }` |
| `HasUnopenedPerksForOtherCharacters` | `public bool HasUnopenedPerksForOtherCharacters { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey { get; set; }` |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SelectHero
`public void SelectHero(Hero hero)`

**Purpose:** Handles logic related to `select hero`.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ApplyAllChanges
`public void ApplyAllChanges()`

**Purpose:** Applies `all changes` to the current object.

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** Handles logic related to `is there any changes`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `reset input key`.

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `previous character input key`.

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `next character input key`.

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** Sets the value or state of `get key text from key i d func`.

## Usage Example

```csharp
var value = new CharacterDeveloperVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)