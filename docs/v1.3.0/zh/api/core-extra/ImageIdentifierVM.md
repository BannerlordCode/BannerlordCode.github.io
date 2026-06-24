<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImageIdentifierVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ImageIdentifierVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public abstract class ImageIdentifierVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs`

## 概述

`ImageIdentifierVM` 位于 `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |
| `TextureProviderName` | `public string TextureProviderName { get; }` |

## 使用示例

```csharp
var implementation = new CustomImageIdentifierVM();
```

## 参见

- [完整类目录](../catalog)