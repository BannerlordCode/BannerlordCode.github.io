<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs`

## Overview

`PartyScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MainScrollPanel` | `public ScrollablePanel MainScrollPanel { get; set; }` |
| `OtherScrollPanel` | `public ScrollablePanel OtherScrollPanel { get; set; }` |
| `TransferInputKeyVisual` | `public InputKeyVisualWidget TransferInputKeyVisual { get; set; }` |
| `UpgradePopupParent` | `public Widget UpgradePopupParent { get; set; }` |
| `RecruitPopupParent` | `public Widget RecruitPopupParent { get; set; }` |
| `TakeAllPrisonersInputKeyVisualParent` | `public Widget TakeAllPrisonersInputKeyVisualParent { get; set; }` |
| `DismissAllPrisonersInputKeyVisualParent` | `public Widget DismissAllPrisonersInputKeyVisualParent { get; set; }` |
| `MainPartyTroopSize` | `public int MainPartyTroopSize { get; set; }` |
| `IsPrisonerWarningEnabled` | `public bool IsPrisonerWarningEnabled { get; set; }` |
| `IsOtherTroopWarningEnabled` | `public bool IsOtherTroopWarningEnabled { get; set; }` |
| `IsTroopWarningEnabled` | `public bool IsTroopWarningEnabled { get; set; }` |
| `TroopLabel` | `public TextWidget TroopLabel { get; set; }` |
| `PrisonerLabel` | `public TextWidget PrisonerLabel { get; set; }` |
| `OtherTroopLabel` | `public TextWidget OtherTroopLabel { get; set; }` |
| `OtherMemberList` | `public ListPanel OtherMemberList { get; set; }` |
| `OtherPrisonerList` | `public ListPanel OtherPrisonerList { get; set; }` |
| `MainMemberList` | `public ListPanel MainMemberList { get; set; }` |
| `MainPrisonerList` | `public ListPanel MainPrisonerList { get; set; }` |
| `ScrollToCharacter` | `public bool ScrollToCharacter { get; set; }` |
| `ScrollCharacterId` | `public string ScrollCharacterId { get; set; }` |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner { get; set; }` |

## Usage Example

```csharp
var widget = new PartyScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)