<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpriteData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteData`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/SpriteData.cs`

## 概述

`SpriteData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### GetSprite
```csharp
public Sprite GetSprite(string name)
```

### SpriteExists
```csharp
public bool SpriteExists(string spriteName)
```

### Load
```csharp
public void Load(ResourceDepot resourceDepot)
```

### Reload
```csharp
public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)
```

## 使用示例

```csharp
// SpriteData (Data) 的典型用法
new SpriteData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)