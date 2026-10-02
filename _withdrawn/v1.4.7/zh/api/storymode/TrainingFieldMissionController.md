---
title: "TrainingFieldMissionController"
description: "StoryMode.Missions.TrainingFieldMissionController —— 命名空间 StoryMode.Missions 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# TrainingFieldMissionController

**Namespace:** `StoryMode.Missions`  
**Module:** `StoryMode`  
**Type:** `public class TrainingFieldMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## 概述

`TrainingFieldMissionController` 是 bannerlord-1.4.7 源码中命名空间 `StoryMode.Missions` 下的类，声明于模块目录 `StoryMode` 的 `StoryMode/Missions/TrainingFieldMissionController.cs`（第 24 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MissionLogic`；解析到的成员共 369 项，其中 17 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public string Id { get; }` — 属性，get，类型 string
- `public bool IsFinished { get; private set; }` — 属性，get/set，类型 bool
- `public bool HasBackground { get; }` — 属性，get，类型 bool
- `public bool IsActive { get; private set; }` — 属性，get/set，类型 bool
- `public List<TrainingFieldMissionController.TutorialObjective> SubTasks { get; }` — 属性，get，类型 List<TrainingFieldMissionController.TutorialObjective>
- `public float Score { get; private set; }` — 属性，get/set，类型 float
- `public TutorialObjective(string id, bool isFinished = false, bool isActive = false, bool hasBackground = false)` — 方法，4 个参数，返回 T
- `public void SetTextVariableOfName(string tag, int variable)` — 方法，2 个参数，返回 void
- `public string GetNameString()` — 方法，0 个参数，返回 string
- `public bool SetActive(bool isActive)` — 方法，1 个参数，返回 bool
- `public bool FinishTask()` — 方法，0 个参数，返回 bool
- `public void FinishSubTask(string subTaskName, float score)` — 方法，2 个参数，返回 void
- `public bool SetAllSubTasksInactive()` — 方法，0 个参数，返回 bool
- `public void AddSubTask(TrainingFieldMissionController.TutorialObjective newSubTask)` — 方法，1 个参数，返回 void
- `public void RestoreScoreFromSave(float score)` — 方法，1 个参数，返回 void
- `public DelayedAction(Action order, float delayTime)` — 方法，2 个参数，返回 D
- `public bool Update()` — 方法，0 个参数，返回 bool


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 17 条成员记录全部来自 `StoryMode/Missions/TrainingFieldMissionController.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class TrainingFieldMissionController : MissionLogic` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`storymode` API](../)
- [AchievementsCampaignBehavior（同命名空间）](../AchievementsCampaignBehavior)
- [ArmyCohesionStep1Tutorial（同命名空间）](../ArmyCohesionStep1Tutorial)
- [ArmyCohesionStep2Tutorial（同命名空间）](../ArmyCohesionStep2Tutorial)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
