<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptionsManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignOptionsManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsManager.cs`

## 概述

`CampaignOptionsManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### GetOptionWithIdExists
```csharp
public static bool GetOptionWithIdExists(string identifier)
```

### Initialize
```csharp
public static void Initialize()
```

### ClearCachedOptions
```csharp
public static void ClearCachedOptions()
```

### GetGameplayCampaignOptions
```csharp
public static List<ICampaignOptionData> GetGameplayCampaignOptions()
```

### GetCharacterCreationCampaignOptions
```csharp
public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()
```

## 使用示例

```csharp
// CampaignOptionsManager (Manager) 的典型用法
CampaignOptionsManager.Current;
```

## 参见

- [完整类目录](../catalog)