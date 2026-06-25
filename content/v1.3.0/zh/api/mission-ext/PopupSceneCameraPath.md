---
title: "PopupSceneCameraPath"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PopupSceneCameraPath`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneCameraPath

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneCameraPath : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs`

## 概述

`PopupSceneCameraPath` 位于 `TaleWorlds.MountAndBlade.View.Scripts`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Scripts` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### SetInitialState
`public void SetInitialState()`

**用途 / Purpose:** 设置 `initial state` 的值或状态。

### SetPositiveState
`public void SetPositiveState()`

**用途 / Purpose:** 设置 `positive state` 的值或状态。

### SetNegativeState
`public void SetNegativeState()`

**用途 / Purpose:** 设置 `negative state` 的值或状态。

### SetIsReady
`public void SetIsReady(bool isReady)`

**用途 / Purpose:** 设置 `is ready` 的值或状态。

### GetCameraFade
`public float GetCameraFade()`

**用途 / Purpose:** 获取 `camera fade` 的当前值。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

## 使用示例

```csharp
var value = new PopupSceneCameraPath();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)