<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuOption`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOption`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs`

## Overview

`GameMenuOption` lives in `TaleWorlds.CampaignSystem.GameMenus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType { get; }` |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `Text2` | `public TextObject Text2 { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

## Key Methods

### GetConditionsHold
`public bool GetConditionsHold(Game game, MenuContext menuContext)`

**Purpose:** Gets the current value of `conditions hold`.

### RunConsequence
`public void RunConsequence(MenuContext menuContext)`

**Purpose:** Handles logic related to `run consequence`.

### SetEnable
`public void SetEnable(bool isEnable)`

**Purpose:** Sets the value or state of `enable`.

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**Purpose:** Called when the `condition delegate` event is raised.

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**Purpose:** Called when the `consequence delegate` event is raised.

## Usage Example

```csharp
var value = new GameMenuOption();
value.GetConditionsHold(game, menuContext);
```

## See Also

- [Complete Class Catalog](../catalog)