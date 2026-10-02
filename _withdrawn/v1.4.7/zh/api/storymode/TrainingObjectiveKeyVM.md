---
title: "TrainingObjectiveKeyVM"
description: "StoryMode.ViewModelCollection.Missions.TrainingObjectiveKeyVM —— 命名空间 StoryMode.ViewModelCollection.Missions 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# TrainingObjectiveKeyVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`  
**Module:** `StoryMode.ViewModelCollection`  
**Type:** `public class TrainingObjectiveKeyVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs`

## 概述

`TrainingObjectiveKeyVM` 是 bannerlord-1.4.7 源码中命名空间 `StoryMode.ViewModelCollection.Missions` 下的类，声明于模块目录 `StoryMode.ViewModelCollection` 的 `StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs`（第 10 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `ViewModel`；解析到的成员共 19 项，其中 8 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public MouseAndClickInput(TrainingObjectiveKeyVM.MovementTypes movementType, TrainingObjectiveKeyVM.MouseClickTypes mouseClickType)` — 方法，2 个参数，返回 M
- `public TrainingObjectiveKeyVM.MovementTypes CurrentMovementType;` — 字段，类型 TrainingObjectiveKeyVM.MovementTypes
- `public TrainingObjectiveKeyVM.MouseClickTypes CurrentClickType;` — 字段，类型 TrainingObjectiveKeyVM.MouseClickTypes
- `public KeyInput(int gameKeyDefinition, bool isCombatHotKey)` — 方法，2 个参数，返回 K
- `public InputKeyItemVM InputKeyItemVM;` — 字段，类型 InputKeyItemVM
- `public ControllerStickInput(TrainingObjectiveKeyVM.MovementTypes movementType, bool isLeftStick)` — 方法，2 个参数，返回 C
- `public TrainingObjectiveKeyVM.MovementTypes CurrentMovementType;` — 字段，类型 TrainingObjectiveKeyVM.MovementTypes
- `public bool IsLeftStick;` — 字段，类型 bool


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 8 条成员记录全部来自 `StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class TrainingObjectiveKeyVM : ViewModel` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`storymode` API](../)
- [ViewModel（基类）](../../core-extra/ViewModel)
- [InputKeyItemVM（成员类型）](../../sandbox/InputKeyItemVM)
- [AchievementsCampaignBehavior（同命名空间）](../AchievementsCampaignBehavior)
- [ArmyCohesionStep1Tutorial（同命名空间）](../ArmyCohesionStep1Tutorial)
- [ArmyCohesionStep2Tutorial（同命名空间）](../ArmyCohesionStep2Tutorial)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
