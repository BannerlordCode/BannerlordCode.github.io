---
title: "MusicianGroup"
description: "MusicianGroup 的自动生成类参考。"
---
# MusicianGroup

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class MusicianGroup : UsableMachine`
**Base:** `UsableMachine`
**File:** `SandBox/Objects/Usables/MusicianGroup.cs`

## 概述

`MusicianGroup` 位于 `SandBox.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 MusicianGroup 实例
MusicianGroup musicianGroup = ...;
var result = musicianGroup.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 MusicianGroup 实例
MusicianGroup musicianGroup = ...;
var result = musicianGroup.GetDescriptionText(gameEntity);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 a i behavior object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MusicianGroup 实例
MusicianGroup musicianGroup = ...;
var result = musicianGroup.CreateAIBehaviorObject();
```

### SetPlayList
`public void SetPlayList(List<SettlementMusicData> playList)`

**用途 / Purpose:** **用途 / Purpose:** 为 play list 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MusicianGroup 实例
MusicianGroup musicianGroup = ...;
musicianGroup.SetPlayList(playList);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 MusicianGroup 实例
MusicianGroup musicianGroup = ...;
var result = musicianGroup.GetTickRequirement();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MusicianGroup musicianGroup = ...;
musicianGroup.GetActionTextForStandingPoint(usableGameObject);
```

## 参见

- [本区域目录](../)