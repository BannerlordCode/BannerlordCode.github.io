---
title: "SceneNotificationVM"
description: "SceneNotificationVM 的自动生成类参考。"
---
# SceneNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/SceneNotificationVM.cs`

## 概述

`SceneNotificationVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveData` | `public SceneNotificationData ActiveData { get; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `Scene` | `public object Scene { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.RefreshValues();
```

### CreateNotification
`public void CreateNotification(SceneNotificationData data)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 notification 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.CreateNotification(data);
```

### ClearData
`public void ClearData()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的data。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ClearData();
```

### ExecuteAffirmativeProcess
`public void ExecuteAffirmativeProcess()`

**用途 / Purpose:** **用途 / Purpose:** 执行 affirmative process 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ExecuteAffirmativeProcess();
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ExecuteClose();
```

### ExecuteNegativeProcess
`public void ExecuteNegativeProcess()`

**用途 / Purpose:** **用途 / Purpose:** 执行 negative process 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ExecuteNegativeProcess();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SceneNotificationVM 实例
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.RefreshValues();
```

## 参见

- [本区域目录](../)