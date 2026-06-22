<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NewsManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NewsManager

**命名空间:** TaleWorlds.Library.NewsManager
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`NewsManager` 是 `TaleWorlds.Library.NewsManager` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NewsItems` | `public MBReadOnlyList<NewsItem> NewsItems { get; }` |
| `IsInPreviewMode` | `public bool IsInPreviewMode { get; }` |
| `LocalizationID` | `public string LocalizationID { get; }` |


## 主要方法

### GetNewsItems

```csharp
public Task<MBReadOnlyList<NewsItem>> GetNewsItems(bool forceRefresh)
```

### SetNewsSourceURL

```csharp
public void SetNewsSourceURL(string url)
```

### UpdateNewsItems

```csharp
public Task UpdateNewsItems(bool forceRefresh)
```

### UpdateLocalizationID

```csharp
public void UpdateLocalizationID(string localizationID)
```

### OnFinalize

```csharp
public void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)