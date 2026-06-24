<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AlleyHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class AlleyHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`

## 概述

`AlleyHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `AlleyHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)`

**用途 / Purpose:** 处理 `open screen for managing alley` 相关逻辑。

### CreateMultiSelectionInquiryForSelectingClanMemberToAlley
`public static void CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)`

**用途 / Purpose:** 创建一个 `multi selection inquiry for selecting clan member to alley` 实例或对象。

## 使用示例

```csharp
AlleyHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)