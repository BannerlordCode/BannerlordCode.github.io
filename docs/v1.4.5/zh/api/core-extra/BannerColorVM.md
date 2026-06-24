<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerColorVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerColorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerColorVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.BannerEditor/BannerColorVM.cs`

## 概述

`BannerColorVM` 位于 `TaleWorlds.Core.ViewModelCollection.BannerEditor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.BannerEditor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ColorID` | `public int ColorID { get; set; }` |
| `Color` | `public uint Color { get; set; }` |
| `ColorAsStr` | `public string ColorAsStr { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### ExecuteSelectIcon
`public void ExecuteSelectIcon()`

**用途 / Purpose:** 执行 `select icon` 操作或流程。

### SetOnSelectionAction
`public void SetOnSelectionAction(Action<BannerColorVM> onSelection)`

**用途 / Purpose:** 设置 `on selection action` 的值或状态。

## 使用示例

```csharp
var value = new BannerColorVM();
value.ExecuteSelectIcon();
```

## 参见

- [完整类目录](../catalog)