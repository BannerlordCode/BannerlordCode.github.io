---
title: "IEducationLogic"
description: "IEducationLogic 的自动生成类参考。"
---
# IEducationLogic

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IEducationLogic`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs`

## 概述

`IEducationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `IEducationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIEducationLogic service = ...;
```

## 参见

- [本区域目录](../)