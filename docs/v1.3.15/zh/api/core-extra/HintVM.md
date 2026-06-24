<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HintVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HintVM

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core
**类型:** `public class HintVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**领域:** core-extra

## 概述

`HintVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## 主要方法

### RefreshGenericHintTooltip
`public static void RefreshGenericHintTooltip(HintVM hint, object args)`

**用途 / Purpose:** 刷新 `generic hint tooltip` 的显示或缓存。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
HintVM.RefreshGenericHintTooltip(hint, args);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
