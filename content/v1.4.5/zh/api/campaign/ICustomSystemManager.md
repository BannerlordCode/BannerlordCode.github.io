---
title: "ICustomSystemManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ICustomSystemManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ICustomSystemManager

**Namespace:** TaleWorlds.CampaignSystem.Handlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Handlers/ICustomSystemManager.cs`

## 概述

`ICustomSystemManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ICustomSystemManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
ICustomSystemManager implementation = GetCustomSystemManagerImplementation();
```

## 参见

- [完整类目录](../catalog)