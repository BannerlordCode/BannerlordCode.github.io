---
title: "LocalizedVoiceManager"
description: "LocalizedVoiceManager 的自动生成类参考。"
---
# LocalizedVoiceManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedVoiceManager`
**Base:** 无
**File:** `TaleWorlds.Localization/LocalizedVoiceManager.cs`

## 概述

`LocalizedVoiceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LocalizedVoiceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLocalizedVoice
`public static VoiceObject GetLocalizedVoice(string id)`

**用途 / Purpose:** 读取并返回当前对象中 localized voice 的结果。

```csharp
// 静态调用，不需要实例
LocalizedVoiceManager.GetLocalizedVoice("example");
```

### GetVoiceLanguageIds
`public static List<string> GetVoiceLanguageIds()`

**用途 / Purpose:** 读取并返回当前对象中 voice language ids 的结果。

```csharp
// 静态调用，不需要实例
LocalizedVoiceManager.GetVoiceLanguageIds();
```

## 使用示例

```csharp
var manager = LocalizedVoiceManager.Current;
```

## 参见

- [本区域目录](../)