---
title: "AgentHelper"
description: "AgentHelper 的自动生成类参考。"
---
# AgentHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class AgentHelper`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Helpers/TaleWorlds.MountAndBlade/AgentHelper.cs`

## 概述

`AgentHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `AgentHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
AgentHelper.Initialize();
```

## 参见

- [本区域目录](../)