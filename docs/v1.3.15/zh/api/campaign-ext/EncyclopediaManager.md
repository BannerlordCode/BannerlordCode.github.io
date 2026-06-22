<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaManager

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## 概述

`EncyclopediaManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker { get; }` |

## 主要方法

### CreateEncyclopediaPages
```csharp
public void CreateEncyclopediaPages()
```

### GetEncyclopediaPages
```csharp
public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()
```

### GetPageOf
```csharp
public EncyclopediaPage GetPageOf(Type type)
```

### GetIdentifier
```csharp
public string GetIdentifier(Type type)
```

### GoToLink
```csharp
public void GoToLink(string pageType, string stringID)
```

### GoToLink
```csharp
public void GoToLink(string link)
```

### SetLinkCallback
```csharp
public void SetLinkCallback(Action<string, object> ExecuteLink)
```

## 使用示例

```csharp
// EncyclopediaManager (Manager) 的典型用法
EncyclopediaManager.Current;
```

## 参见

- [完整类目录](../catalog)