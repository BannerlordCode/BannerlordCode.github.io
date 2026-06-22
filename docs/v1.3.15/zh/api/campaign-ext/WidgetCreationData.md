<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetCreationData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetCreationData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCreationData`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## 概述

`WidgetCreationData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `BrushFactory` | `public BrushFactory BrushFactory { get { return this.Context.BrushFactory; }` |
| `SpriteData` | `public SpriteData SpriteData { get { return this.Context.SpriteData; }` |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get { return this.WidgetFactory.PrefabExtensionContext; }` |

## 主要方法

### AddExtensionData
```csharp
public void AddExtensionData(string name, object data)
```

### AddExtensionData
```csharp
public void AddExtensionData(object data)
```

## 使用示例

```csharp
// WidgetCreationData (Data) 的典型用法
new WidgetCreationData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)