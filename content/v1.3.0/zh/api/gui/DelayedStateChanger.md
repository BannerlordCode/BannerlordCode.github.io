---
title: "DelayedStateChanger"
description: "DelayedStateChanger 的自动生成类参考。"
---
# DelayedStateChanger

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DelayedStateChanger : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`

## 概述

`DelayedStateChanger` 位于 `TaleWorlds.GauntletUI.ExtraWidgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.ExtraWidgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoStart` | `public bool AutoStart { get; set; }` |
| `Trigger` | `public bool Trigger { get; set; }` |
| `StateResetable` | `public bool StateResetable { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `Delay` | `public float Delay { get; set; }` |
| `State` | `public string State { get; set; }` |
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |

## 主要方法

### Start
`public void Start()`

**用途 / Purpose:** **用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 DelayedStateChanger 实例
DelayedStateChanger delayedStateChanger = ...;
delayedStateChanger.Start();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DelayedStateChanger delayedStateChanger = ...;
delayedStateChanger.Start();
```

## 参见

- [本区域目录](../)