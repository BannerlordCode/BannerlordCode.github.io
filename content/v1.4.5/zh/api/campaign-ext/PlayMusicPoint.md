---
title: "PlayMusicPoint"
description: "PlayMusicPoint 的自动生成类参考。"
---
# PlayMusicPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class PlayMusicPoint : AnimationPoint`
**Base:** `AnimationPoint`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AnimationPoints/PlayMusicPoint.cs`

## 概述

`PlayMusicPoint` 位于 `SandBox.Objects.AnimationPoints`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AnimationPoints` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartLoop
`public void StartLoop(SoundEvent trackEvent)`

**用途 / Purpose:** 启动「loop」流程或状态机。

```csharp
// 先通过子系统 API 拿到 PlayMusicPoint 实例
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.StartLoop(trackEvent);
```

### EndLoop
`public void EndLoop()`

**用途 / Purpose:** 处理与 「end loop」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PlayMusicPoint 实例
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.EndLoop();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 PlayMusicPoint 实例
PlayMusicPoint playMusicPoint = ...;
var result = playMusicPoint.GetTickRequirement();
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PlayMusicPoint 实例
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.OnUseStopped(userAgent, false, 0);
```

### ChangeInstrument
`public void ChangeInstrument(Tuple<InstrumentData, float> instrument)`

**用途 / Purpose:** 处理与 「change instrument」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PlayMusicPoint 实例
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.ChangeInstrument(tuple<InstrumentData, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.StartLoop(trackEvent);
```

## 参见

- [本区域目录](../)