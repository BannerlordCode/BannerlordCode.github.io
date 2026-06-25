---
title: "GameMenuInitializationHandler"
description: "GameMenuInitializationHandler 的自动生成类参考。"
---
# GameMenuInitializationHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuInitializationHandler : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs`

## 概述

`GameMenuInitializationHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GameMenuInitializationHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<GameMenuInitializationHandler>();
```

## 参见

- [本区域目录](../)