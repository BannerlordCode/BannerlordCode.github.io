---
title: "PlayMusicPoint"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayMusicPoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayMusicPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class PlayMusicPoint : AnimationPoint`
**Base:** `AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs`

## 概述

`PlayMusicPoint` 位于 `SandBox.Objects.AnimationPoints`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AnimationPoints` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartLoop
`public void StartLoop(SoundEvent trackEvent)`

**用途 / Purpose:** 处理 `start loop` 相关逻辑。

### EndLoop
`public void EndLoop()`

**用途 / Purpose:** 处理 `end loop` 相关逻辑。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### ChangeInstrument
`public void ChangeInstrument(Tuple<InstrumentData, float> instrument)`

**用途 / Purpose:** 处理 `change instrument` 相关逻辑。

## 使用示例

```csharp
var value = new PlayMusicPoint();
value.StartLoop(trackEvent);
```

## 参见

- [完整类目录](../catalog)