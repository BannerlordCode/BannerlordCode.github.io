---
title: "StoryModeManager"
description: "StoryModeManager 的自动生成类参考。"
---
# StoryModeManager

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeManager`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeManager.cs`

## 概述

`StoryModeManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `StoryModeManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static StoryModeManager Current { get; }` |
| `StoryModeEvents` | `public StoryModeEvents StoryModeEvents { get; }` |
| `MainStoryLine` | `public MainStoryLine MainStoryLine { get; }` |
| `StoryModeHeroes` | `public StoryModeHeroes StoryModeHeroes { get; }` |
| `StoryModeBannerEffects` | `public StoryModeBannerEffects StoryModeBannerEffects { get; }` |

## 使用示例

```csharp
var manager = StoryModeManager.Current;
```

## 参见

- [本区域目录](../)