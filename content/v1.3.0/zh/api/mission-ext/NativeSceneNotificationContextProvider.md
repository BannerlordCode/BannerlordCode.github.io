---
title: "NativeSceneNotificationContextProvider"
description: "NativeSceneNotificationContextProvider 的自动生成类参考。"
---
# NativeSceneNotificationContextProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NativeSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/NativeSceneNotificationContextProvider.cs`

## 概述

`NativeSceneNotificationContextProvider` 位于 `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsContextAllowed
`public bool IsContextAllowed(SceneNotificationData.RelevantContextType relevantType)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 context allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 NativeSceneNotificationContextProvider 实例
NativeSceneNotificationContextProvider nativeSceneNotificationContextProvider = ...;
var result = nativeSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NativeSceneNotificationContextProvider nativeSceneNotificationContextProvider = ...;
nativeSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## 参见

- [本区域目录](../)