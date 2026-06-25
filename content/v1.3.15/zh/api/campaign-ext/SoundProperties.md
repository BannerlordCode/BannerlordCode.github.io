---
title: "SoundProperties"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SoundProperties`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundProperties

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SoundProperties`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/SoundProperties.cs`

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

**用途 / Purpose:** 向当前集合/状态中添加 `state sound`。

### AddEventSound
`public void AddEventSound(string state, AudioProperty audioProperty)`

**用途 / Purpose:** 向当前集合/状态中添加 `event sound`。

### FillFrom
`public void FillFrom(SoundProperties soundProperties)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### GetEventAudioProperty
`public AudioProperty GetEventAudioProperty(string eventName)`

**用途 / Purpose:** 获取 `event audio property` 的当前值。

### GetStateAudioProperty
`public AudioProperty GetStateAudioProperty(string stateName)`

**用途 / Purpose:** 获取 `state audio property` 的当前值。

## 使用示例

```csharp
var value = new SoundProperties();
value.AddStateSound("example", audioProperty);
```

## 参见

- [完整类目录](../catalog)