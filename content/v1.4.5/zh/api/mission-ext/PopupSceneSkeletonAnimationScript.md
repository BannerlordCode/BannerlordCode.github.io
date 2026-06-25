---
title: "PopupSceneSkeletonAnimationScript"
description: "PopupSceneSkeletonAnimationScript 的自动生成类参考。"
---
# PopupSceneSkeletonAnimationScript

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSkeletonAnimationScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PopupSceneSkeletonAnimationScript.cs`

## 概述

`PopupSceneSkeletonAnimationScript` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PopupSceneSkeletonAnimationScript 实例
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
popupSceneSkeletonAnimationScript.Initialize();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 PopupSceneSkeletonAnimationScript 实例
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
var result = popupSceneSkeletonAnimationScript.GetTickRequirement();
```

### SetState
`public void SetState(int state)`

**用途 / Purpose:** 为 「state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PopupSceneSkeletonAnimationScript 实例
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
popupSceneSkeletonAnimationScript.SetState(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PopupSceneSkeletonAnimationScript popupSceneSkeletonAnimationScript = ...;
popupSceneSkeletonAnimationScript.Initialize();
```

## 参见

- [本区域目录](../)