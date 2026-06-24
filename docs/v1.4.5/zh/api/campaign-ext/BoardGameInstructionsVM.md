<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameInstructionsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameInstructionsVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameInstructionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.BoardGame/BoardGameInstructionsVM.cs`

## 概述

`BoardGameInstructionsVM` 位于 `SandBox.ViewModelCollection.BoardGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.BoardGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `InstructionsText` | `public string InstructionsText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `CurrentPageText` | `public string CurrentPageText { get; set; }` |
| `InstructionList` | `public MBBindingList<BoardGameInstructionVM> InstructionList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteShowPrevious
`public void ExecuteShowPrevious()`

**用途 / Purpose:** 执行 `show previous` 操作或流程。

### ExecuteShowNext
`public void ExecuteShowNext()`

**用途 / Purpose:** 执行 `show next` 操作或流程。

## 使用示例

```csharp
var value = new BoardGameInstructionsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)