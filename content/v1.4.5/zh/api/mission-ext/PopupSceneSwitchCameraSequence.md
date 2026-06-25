---
title: "PopupSceneSwitchCameraSequence"
description: "PopupSceneSwitchCameraSequence 的自动生成类参考。"
---
# PopupSceneSwitchCameraSequence

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSwitchCameraSequence : PopupSceneSequence`
**Base:** `PopupSceneSequence`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/PopupSceneSwitchCameraSequence.cs`

## 概述

`PopupSceneSwitchCameraSequence` 位于 `TaleWorlds.MountAndBlade.View.Scripts`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Scripts` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnInitialState
`public override void OnInitialState()`

**用途 / Purpose:** 在 initial state 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PopupSceneSwitchCameraSequence 实例
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnInitialState();
```

### OnPositiveState
`public override void OnPositiveState()`

**用途 / Purpose:** 在 positive state 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PopupSceneSwitchCameraSequence 实例
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnPositiveState();
```

### OnNegativeState
`public override void OnNegativeState()`

**用途 / Purpose:** 在 negative state 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PopupSceneSwitchCameraSequence 实例
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnNegativeState();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnInitialState();
```

## 参见

- [本区域目录](../)