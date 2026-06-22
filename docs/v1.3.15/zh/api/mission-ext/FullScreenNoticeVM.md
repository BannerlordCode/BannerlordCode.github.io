<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FullScreenNoticeVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FullScreenNoticeVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FullScreenNoticeVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsNoticeActive` | `public bool IsNoticeActive { get; set; }` |
| `NoticeTitleText` | `public string NoticeTitleText { get; set; }` |
| `NoticeContentText` | `public string NoticeContentText { get; set; }` |
| `ConfirmText` | `public string ConfirmText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteCloseNotice

```csharp
public void ExecuteCloseNotice()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)