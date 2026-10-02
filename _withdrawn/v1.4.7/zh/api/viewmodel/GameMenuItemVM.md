---
title: "GameMenuItemVM"
description: "TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.GameMenuItemVM —— 命名空间 TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# GameMenuItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class GameMenuItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## 概述

`GameMenuItemVM` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem.ViewModelCollection` 的 `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`（第 16 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `ViewModel`；解析到的成员共 49 项，其中 10 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public GameMenuItemCreationData(MenuContext menuContext, int index, TextObject text, TextObject text2, TextObject tooltip, GameMenu.MenuAndOptionType type, GameMenuOption.IssueQuestFlags questFlags, GameMenuOption gameMenuOption, GameKey shortcutKey)` — 方法，9 个参数，返回 G
- `public readonly MenuContext MenuContext;` — 字段，类型 MenuContext
- `public readonly int Index;` — 字段，类型 int
- `public readonly TextObject Text;` — 字段，类型 TextObject
- `public readonly TextObject Text2;` — 字段，类型 TextObject
- `public readonly TextObject Tooltip;` — 字段，类型 TextObject
- `public readonly GameMenu.MenuAndOptionType Type;` — 字段，类型 GameMenu.MenuAndOptionType
- `public readonly GameMenuOption.IssueQuestFlags OptionQuestData;` — 字段，类型 GameMenuOption.IssueQuestFlags
- `public readonly GameMenuOption GameMenuOption;` — 字段，类型 GameMenuOption
- `public readonly GameKey ShortcutKey;` — 字段，类型 GameKey


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 10 条成员记录全部来自 `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class GameMenuItemVM : ViewModel` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`viewmodel` API](../)
- [ViewModel（基类）](../../core-extra/ViewModel)
- [AcceptCallToWarOfferNotificationItemVM（同命名空间）](../AcceptCallToWarOfferNotificationItemVM)
- [AcceptingCallToWarAgreementDecisionItemVM（同命名空间）](../AcceptingCallToWarAgreementDecisionItemVM)
- [ActionCampaignOptionData（同命名空间）](../ActionCampaignOptionData)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
