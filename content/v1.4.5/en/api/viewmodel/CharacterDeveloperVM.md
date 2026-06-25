---
title: "CharacterDeveloperVM"
description: "Auto-generated class reference for CharacterDeveloperVM."
---
# CharacterDeveloperVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/CharacterDeveloperVM.cs`

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
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `UnopenedPerksHint` | `public HintViewModel UnopenedPerksHint { get; set; }` |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint { get; set; }` |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `SkillFocusText` | `public string SkillFocusText { get; set; }` |
| `AddFocusText` | `public string AddFocusText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `UnopenedPerksNumForCurrentCharacter` | `public int UnopenedPerksNumForCurrentCharacter { get; set; }` |
| `HasUnopenedPerksForCurrentCharacter` | `public bool HasUnopenedPerksForCurrentCharacter { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey { get; set; }` |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.RefreshValues();
```

### SelectHero
`public void SelectHero(Hero hero)`

**Purpose:** **Purpose:** Executes the SelectHero logic.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SelectHero(hero);
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ExecuteReset();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ExecuteCancel();
```

### ApplyAllChanges
`public void ApplyAllChanges()`

**Purpose:** **Purpose:** Applies the effect of all changes to the this instance.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ApplyAllChanges();
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there any changes state or condition.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
var result = characterDeveloperVM.IsThereAnyChanges();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetCancelInputKey(gameKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetDoneInputKey(hotKey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to reset input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetResetInputKey(hotKey);
```

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to previous character input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetPreviousCharacterInputKey(hotKey);
```

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to next character input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetNextCharacterInputKey(hotKey);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** **Purpose:** Assigns a new value to get key text from key i d func and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperVM from the subsystem API first
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.RefreshValues();
```

## See Also

- [Area Index](../)