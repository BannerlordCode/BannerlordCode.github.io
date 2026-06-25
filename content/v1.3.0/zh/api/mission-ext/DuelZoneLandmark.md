---
title: "DuelZoneLandmark"
description: "DuelZoneLandmark 的自动生成类参考。"
---
# DuelZoneLandmark

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelZoneLandmark : ScriptComponentBehavior, IFocusable`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/DuelZoneLandmark.cs`

## 概述

`DuelZoneLandmark` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get; }` |

## 主要方法

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus gain 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelZoneLandmark 实例
DuelZoneLandmark duelZoneLandmark = ...;
duelZoneLandmark.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus lose 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelZoneLandmark 实例
DuelZoneLandmark duelZoneLandmark = ...;
duelZoneLandmark.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 info text for being not interactable 的结果。

```csharp
// 先通过子系统 API 拿到 DuelZoneLandmark 实例
DuelZoneLandmark duelZoneLandmark = ...;
var result = duelZoneLandmark.GetInfoTextForBeingNotInteractable(userAgent);
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 DuelZoneLandmark 实例
DuelZoneLandmark duelZoneLandmark = ...;
var result = duelZoneLandmark.GetDescriptionText(gameEntity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DuelZoneLandmark duelZoneLandmark = ...;
duelZoneLandmark.OnFocusGain(userAgent);
```

## 参见

- [本区域目录](../)