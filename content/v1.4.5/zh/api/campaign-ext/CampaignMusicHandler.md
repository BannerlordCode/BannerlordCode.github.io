---
title: "CampaignMusicHandler"
description: "CampaignMusicHandler 的自动生成类参考。"
---
# CampaignMusicHandler

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class CampaignMusicHandler : IMusicHandler`
**Base:** `IMusicHandler`
**File:** `Modules.SandBox/SandBox.View/SandBox.View/CampaignMusicHandler.cs`

## 概述

`CampaignMusicHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CampaignMusicHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Create
`public static void Create()`

**用途 / Purpose:** **用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
CampaignMusicHandler.Create();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CampaignMusicHandler>();
```

## 参见

- [本区域目录](../)