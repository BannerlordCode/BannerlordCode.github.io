---
title: "SoundProperties"
description: "SoundProperties 的自动生成类参考。"
---
# SoundProperties

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SoundProperties`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/SoundProperties.cs`

## 概述

`SoundProperties` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegisteredStateSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredStateSounds { get; }` |
| `RegisteredEventSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredEventSounds { get; }` |

## 主要方法

### AddStateSound
`public void AddStateSound(string state, AudioProperty audioProperty)`

**用途 / Purpose:** 将 「state sound」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SoundProperties 实例
SoundProperties soundProperties = ...;
soundProperties.AddStateSound("example", audioProperty);
```

### AddEventSound
`public void AddEventSound(string state, AudioProperty audioProperty)`

**用途 / Purpose:** 将 「event sound」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SoundProperties 实例
SoundProperties soundProperties = ...;
soundProperties.AddEventSound("example", audioProperty);
```

### FillFrom
`public void FillFrom(SoundProperties soundProperties)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SoundProperties 实例
SoundProperties soundProperties = ...;
soundProperties.FillFrom(soundProperties);
```

### GetEventAudioProperty
`public AudioProperty GetEventAudioProperty(string eventName)`

**用途 / Purpose:** 读取并返回当前对象中 「event audio property」 的结果。

```csharp
// 先通过子系统 API 拿到 SoundProperties 实例
SoundProperties soundProperties = ...;
var result = soundProperties.GetEventAudioProperty("example");
```

### GetStateAudioProperty
`public AudioProperty GetStateAudioProperty(string stateName)`

**用途 / Purpose:** 读取并返回当前对象中 「state audio property」 的结果。

```csharp
// 先通过子系统 API 拿到 SoundProperties 实例
SoundProperties soundProperties = ...;
var result = soundProperties.GetStateAudioProperty("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SoundProperties soundProperties = ...;
soundProperties.AddStateSound("example", audioProperty);
```

## 参见

- [本区域目录](../)