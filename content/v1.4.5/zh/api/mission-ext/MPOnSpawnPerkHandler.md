---
title: "MPOnSpawnPerkHandler"
description: "MPOnSpawnPerkHandler 的自动生成类参考。"
---
# MPOnSpawnPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPOnSpawnPerkHandler`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkObject.cs`

## 概述

`MPOnSpawnPerkHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MPOnSpawnPerkHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MPOnSpawnPerkHandler>();
```

## 参见

- [本区域目录](../)