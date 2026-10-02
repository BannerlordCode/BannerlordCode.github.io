---
title: "GameMenuOption"
description: "GameMenuOption: a public class in TaleWorlds.CampaignSystem.GameMenus; 24 exposed members (5 methods, 13 properties, 1 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuOption`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

GameMenuOption lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs. It is a public class; the inheritance chain is GameMenuOption. It exposes 24 public/protected members: 5 methods, 13 properties, 1 fields, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuOption lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameMenus`, inheritance chain GameMenuOption. The surface is property-led (properties 13/24, methods 5/24), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Type` | `public GameMenu.MenuAndOptionType Type` | property |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType` | property |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData` | property |
| `IdString` | `public string IdString` | property |
| `Text` | `public TextObject Text` | property |
| `Text2` | `public TextObject Text2` | property |
| `Tooltip` | `public TextObject Tooltip` | property |
| `IsLeave` | `public bool IsLeave` | property |
| `IsRepeatable` | `public bool IsRepeatable` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `RelatedObject` | `public object RelatedObject` | property |
| `GameMenuOption` | `public GameMenuOption(GameMenu.MenuAndOptionType type, string idString, TextObject text, TextObject text2, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, bool isRepeatable = false, object relatedObject = null)` | constructor |
| `GetConditionsHold` | `public bool GetConditionsHold(Game game, MenuContext menuContext)` | method |
| `RunConsequence` | `public void RunConsequence(MenuContext menuContext)` | method |
| `SetEnable` | `public void SetEnable(bool isEnable)` | method |
| `GameMenuOption.IssueQuestFlags[]IssueQuestFlagsValues` | `public static GameMenuOption.IssueQuestFlags[]IssueQuestFlagsValues` | field |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args);` | method |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args);` | method |
| `LeaveType` | `public enum LeaveType` | property |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | property |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args)` | nested type |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args)` | nested type |
| `LeaveType` | `public enum LeaveType` | nested type |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenu](../GameMenu/)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager/)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler/)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)
