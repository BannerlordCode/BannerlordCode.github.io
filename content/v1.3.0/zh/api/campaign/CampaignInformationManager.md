---
title: "CampaignInformationManager"
description: "CampaignInformationManager 的自动生成类参考。"
---
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## 概述

`CampaignInformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignInformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnGameLoaded
`public void OnGameLoaded()`

**用途 / Purpose:** 在 「game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignInformationManager 实例
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.OnGameLoaded();
```

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**用途 / Purpose:** 处理与 「new map notice added」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CampaignInformationManager 实例
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.NewMapNoticeAdded(informationData);
```

## 使用示例

```csharp
var manager = CampaignInformationManager.Current;
```

## 参见

- [本区域目录](../)