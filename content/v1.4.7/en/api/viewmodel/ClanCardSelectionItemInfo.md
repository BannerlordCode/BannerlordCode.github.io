---
title: "ClanCardSelectionItemInfo"
description: "ClanCardSelectionItemInfo — struct in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# ClanCardSelectionItemInfo

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public readonly struct ClanCardSelectionItemInfo`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionItemInfo.cs`

## Overview

`ClanCardSelectionItemInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `ClanCardSelectionItemInfo`, `ClanCardSelectionItemInfo`.
- **Data and constants** (12): `Identifier`, `Title`, `Image`, `SpriteType`, `SpriteName`, `SpriteLabel`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClanCardSelectionItemInfo` | ctor | Instance entry point. Takes 10 arguments: `object identifier`, `TextObject title`, `ImageIdentifier image`, `CardSelectionItemSpriteType spriteType`, …. Returns ``. |
| `ClanCardSelectionItemInfo` | ctor | Instance entry point. Takes 4 arguments: `TextObject specialActionText`, `bool isDisabled`, `TextObject disabledReason`, `TextObject actionResult`. Returns ``. |
| `ActionResult` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |
| `DisabledReason` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |
| `Identifier` | field | Instance entry point `object` field — direct storage with no validation or notification. |
| `Image` | field | Instance entry point `ImageIdentifier` field — direct storage with no validation or notification. |
| `IsDisabled` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsSpecialActionItem` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Properties` | field | Instance entry point `IEnumerable<ClanCardSelectionItemPropertyInfo>` field — direct storage with no validation or notification. |
| `SpecialActionText` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |
| `SpriteLabel` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `SpriteName` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `SpriteType` | field | Instance entry point `CardSelectionItemSpriteType` field — direct storage with no validation or notification. |
| `Title` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |

- Constructed as `public ClanCardSelectionItemInfo(object identifier, TextObject title, ImageIdentifier image, CardSelectionItemSpriteType spriteType, string spriteName, string spriteLabel, IEnumerable<ClanCardSelectionItemPropertyInfo> properties, bool isDisabled, TextObject disabledReason, TextObject actionResult)`.
- Constructed as `public ClanCardSelectionItemInfo(TextObject specialActionText, bool isDisabled, TextObject disabledReason, TextObject actionResult)`.

## Usage Example

```csharp
var data = new ClanCardSelectionItemInfo
{
    Identifier = default,
    Title = default,
    Image = default,
    SpriteType = default,
    SpriteName = "",
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionItemInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [CardSelectionItemSpriteType](../CardSelectionItemSpriteType/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.

Section: [api/viewmodel/](../) — the other types in this bucket.
