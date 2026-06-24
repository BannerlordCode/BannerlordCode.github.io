<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FileHelperExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileHelperExtensions

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public static class FileHelperExtensions`
**领域:** core-extra

## 概述

`FileHelperExtensions` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Load
`public static void Load(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 加载 `load` 数据。

### LoadAsync
`public static Task LoadAsync(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 加载 `async` 数据。

### Save
`public static void Save(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 保存 `save` 数据。

### SaveAsync
`public static Task SaveAsync(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 保存 `async` 数据。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
FileHelperExtensions.Load(document, path);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
