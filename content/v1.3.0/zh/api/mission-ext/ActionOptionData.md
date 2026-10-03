---
title: "ActionOptionData"
description: "设置界面里「点一下就执行回调」的选项载体：三个构造器里 managed 版有一个真实缺陷——_nativeType 漏赋导致 IsNative 误报 true，全版本未修。"
---

# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`（99 行）

## 概述

`ActionOptionData` 是设置界面里**「不是滑条也不是下拉框，而是一个点了就触发回调的按钮」**的载体。它实现 [IOptionData](../../engine/Options)（`TaleWorlds.Engine` 命名空间）的九个成员，其中六个是**空实现或返回常量**——因为它压根不存值。

唯一有实际语义的是三个构造器和 `GetOptionType()` / `IsNative()` / `IsAction()` 这三个互相咬合的方法。

真实的构造点全在 [OptionsProvider](../OptionsProvider) 里，一共三处（`OptionsProvider.cs:25`、`:27`、`:28`）：

```csharp
yield return new ActionOptionData("Benchmark", onBenchmarkClick);
yield return new ActionOptionData(NativeOptions.NativeOptionsType.Brightness, onBrightnessClick);
yield return new ActionOptionData(NativeOptions.NativeOptionsType.ExposureCompensation, onExposureClick);
```

也就是：**string 构造和 native 构造被真实使用，managed 构造在 1.3.0 全树里一次都没被调用过。** 这一点直接导致了下一页要讲的缺陷。

## 心智模型

把它当成**「一个选项槽 + 一个回调 + 三选一的类型标记」**。心智模型的核心是**三条识别路径**，以及它们之间一处真实的冲突。

**第一条：`GetOptionType()` 按 native → managed → 字符串的优先级返回一个 `object`。** 完整实现（`ActionOptionData.cs:48-59`）：

```csharp
public object GetOptionType()
{
    if (this._nativeType != NativeOptions.NativeOptionsType.None)
    {
        return this._nativeType;
    }
    if (this._managedType != ManagedOptions.ManagedOptionsType.Language)
    {
        return this._managedType;
    }
    return this._actionOptionTypeId;
}
```

这是**唯一的类型仲裁点**。UI 拿到 `object` 后按运行时类型分派：如果是 `NativeOptionsType` 就去读 native 配置，如果是 `ManagedOptionsType` 就去读托管配置，否则把它当字符串键用。

**第二条：`IsAction()` 判的是一个非常窄的组合。**

```csharp
public bool IsAction()
{
    return this._nativeType == NativeOptions.NativeOptionsType.None
        && this._managedType == ManagedOptions.ManagedOptionsType.Language;
}
```

翻译成条件就是：**既不是 native 类型，也不是「非 Language 的 managed 类型」**。这个条件在两个构造器下成立、在一个构造器下不成立：

| 构造器 | `_nativeType` | `_managedType` | `_actionOptionTypeId` | `IsAction()` |
| --- | --- | --- | --- | --- |
| `ActionOptionData(ManagedOptionsType, Action)` | **未赋值 → 0** | 传入值 | `null` | 见下文缺陷 |
| `ActionOptionData(NativeOptionsType, Action)` | 传入值 | 未赋值 → 0 | `null` | `false`（`_nativeType != None`） |
| `ActionOptionData(string, Action)` | 显式 `None` | 未赋值 → 0 | 传入字符串 | `true`（0 恰好就是 `Language`） |

关键事实：`NativeOptions.NativeOptionsType.None = -1`（`NativeOptions.cs:419`），而 `ManagedOptions.ManagedOptionsType.Language = 0`（`ManagedOptions.cs:440`，它是该枚举的第一个成员）。**字段的默认值 0 同时意味着「native 的 `MasterVolume`」和「managed 的 `Language`」**——两个命名空间、两种含义、同一串字节。

**第三条（缺陷）：managed 构造器漏赋 `_nativeType`，导致 `IsNative()` 误报。** 这是本页最该记住的一条。托管字段的默认值是 0，而 `NativeOptionsType` 的 0 是 `MasterVolume` 而不是 `None`。所以：

```csharp
var opt = new ActionOptionData(ManagedOptions.ManagedOptionsType.BattleSize, onClick);
opt.IsNative();       // 返回 true —— 但你传的是 managed 类型
opt.GetOptionType();  // 返回 NativeOptionsType.MasterVolume —— 不是 BattleSize
opt.IsAction();       // 返回 false —— 因为 _nativeType != None
```

传进去的 `ManagedOptionsType.BattleSize` **被完全吞掉**了：`_managedType` 虽然存了它，但 `GetOptionType()` 的第一个分支就返回了。`IsNative()` 返回 `true` 也和 `ManagedSelectionOptionData` 的行为对不上。

而第三构造器（string 版）**显式写了** `this._nativeType = NativeOptions.NativeOptionsType.None;`（`ActionOptionData.cs:32`）——**这证明作者知道「不赋值不等于 None」**，只是 managed 版漏了同一件事。这个缺陷在 1.3.0 / 1.3.15 / 1.4.6 / 1.5.3 五个版本里**逐字未变**（我逐个版本比对了那个构造器的实现体）。

结论：**要写一个「按钮型选项」，用 string 构造器，不要用 managed 构造器。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnAction` | `public Action OnAction { get; private set; }` | 用户点击时执行的委托。三个构造器都会赋值，setter 是 `private`，构造之后无法更换。没有 `event`，所以同一个实例挂两个消费者会互相覆盖而不是都触发。 |
| `ActionOptionData(ManagedOptionsType, Action)` | `public ActionOptionData(ManagedOptions.ManagedOptionsType managedType, Action onAction)` | 声明「这是一个托管类型的动作项」。**但见上文缺陷**：漏赋 `_nativeType`，导致 `IsNative()` 恒 true、`GetOptionType()` 返回 `MasterVolume`。1.3.0 全树零调用。 |
| `ActionOptionData(NativeOptionsType, Action)` | `public ActionOptionData(NativeOptions.NativeOptionsType nativeType, Action onAction)` | 声明「这是一个 native 类型的动作项」。官方用它接亮度与曝光补偿（`OptionsProvider.cs:27-28`）。`IsNative()` 正确返回 `true`，`GetOptionType()` 返回传入的 native 枚举。 |
| `ActionOptionData(string, Action)` | `public ActionOptionData(string optionTypeId, Action onAction)` | 声明「这是一个字符串键的动作项」。**唯一显式把 `_nativeType` 设为 `None` 的构造器**，因此 `IsAction()` 正确返回 `true`，`GetOptionType()` 正确返回字符串。官方用它接 Benchmark 按钮。 |
| `GetOptionType` | `public object GetOptionType()` | 类型仲裁。优先返回 `_nativeType`（非 `None` 时），其次返回 `_managedType`（非 `Language` 时），最后返回 `_actionOptionTypeId` 字符串。返回值是 `object`，调用方必须按运行时类型分派。 |
| `IsNative` | `public bool IsNative()` | `_nativeType != NativeOptionsType.None`。这是「由 native 侧存储」的标记位。**在 managed 构造器下因为字段默认值问题会误报 `true`。** |
| `IsAction` | `public bool IsAction()` | 精确组合判断：`_nativeType == None && _managedType == Language`。等价于「既不是 native 项，也不是非 Language 的 managed 项」。只有 string 构造器稳定返回 `true`。 |
| `GetIsDisabledAndReasonID` | `public ValueTuple<string, bool> GetIsDisabledAndReasonID()` | 返回 `new ValueTuple<string, bool>(string.Empty, false)`——**恒定「未禁用、无原因」**。动作按钮永远可点。 |
| `GetValue(bool forceRefresh)` | `public float GetValue(bool forceRefresh)` | 返回 `0f`。`forceRefresh` 参数完全忽略。动作项没有数值状态。 |
| `SetValue(float value)` | `public void SetValue(float value)` | **空实现，什么都不做。** 参数被丢弃——不会写入 `_nativeType`、不会改 `_managedType`。 |
| `GetDefaultValue()` | `public float GetDefaultValue()` | 返回 `0f`，与 `GetValue` 相同。 |
| `Commit()` | `public void Commit()` | **空实现。** 其它选项类型用它把暂存值写进配置文件；动作项没有值可提交。 |

## 真实示例

正确的按钮写法——用 string 构造器（官方 Benchmark 按钮的形状，`OptionsProvider.cs:25`）：

```csharp
using System;
using TaleWorlds.Engine.Options;
using TaleWorlds.MountAndBlade.Options;

public static IEnumerable<IOptionData> BuildDebugOptions(Action onBenchmarkClick)
{
    yield return new ActionOptionData("Benchmark", onBenchmarkClick);
    yield return new ActionOptionData(NativeOptions.NativeOptionsType.Brightness, onBenchmarkClick);
}
```

需要「managed 类型的动作按钮」语义时，用组合而不是继承——`IOptionData` 的九个成员在 `ActionOptionData` 里**都不是 `virtual`**（读源码：只有构造器与三个判定方法，其中 `GetOptionType` / `IsNative` / `IsAction` 都是 `public` 无 `virtual`），所以你没法通过 `override` 修掉 managed 构造路径的缺陷：

```csharp
using System;
using TaleWorlds.Engine.Options;
using TaleWorlds.MountAndBlade.Options;

public class ManagedActionButton
{
    public ManagedActionButton(ManagedOptions.ManagedOptionsType type, Action onAction)
    {
        this.Type = type;
        // 用 string 构造器，拿到一个 IsAction() == true 的安全底座
        this.Data = new ActionOptionData("ManagedAction", onAction);
    }

    public ManagedOptions.ManagedOptionsType Type { get; private set; }

    public ActionOptionData Data { get; private set; }

    public void Fire()
    {
        this.Data.OnAction();
    }
}
```

`OnAction` 是 `public Action { get; private set; }`，构造后可直接取出调用，所以这一段能编译。

## 风险与边界

- **managed 构造器在 1.3.0 到 1.5.3 全程有缺陷。** `_nativeType` 漏赋 → `IsNative()` 误报 `true`、`GetOptionType()` 返回 `MasterVolume`、传入的 `ManagedOptionsType` 被吞。不要用它。
- **`IsNative()` 与 `IsAction()` 的返回值不是互斥的完备划分。** 两个方法读的是不同字段的组合，存在「两个都 false」（用 string 构造但 `_actionOptionTypeId` 为 null）或「两个都 true」（不可能，取决于具体组合）的情况。UI 层大概按 `IsAction()` 优先判断，但托管层不保证。
- **`GetOptionType()` 返回 `object`。** 调用方必须 `is` / `as` 分派；直接 `(NativeOptionsType)result.GetOptionType()` 在 string 构造的实例上会抛 `InvalidCastException`。
- **接口成员不是 `virtual`。** 读源码确认：`GetOptionType` / `IsNative` / `IsAction` / `GetValue` / `SetValue` / `Commit` / `GetDefaultValue` / `GetIsDisabledAndReasonID` 全部是 `public` 无 `virtual`。**你无法通过继承修掉 managed 构造路径的缺陷**，只能用组合。这是本类最重要的一条约束。
- **`SetValue` / `Commit` 是空实现。** `IOptionData` 接口要求它们存在，但这个实现不存任何值。别指望通过 `SetValue` 改出一个数值状态。
- **`GetValue(bool forceRefresh)` 忽略参数。** 传 `true` 强制刷新不会发生任何事，它永远返回 `0f`。
- **`GetIsDisabledAndReasonID` 恒返回「未禁用」。** 想让按钮在某条件下灰掉，这个类做不到——你得在 `OnAction` 委托里自己判，或者改用别的选项类型。
- **`OnAction` 是属性不是事件。** 多次赋值会覆盖前一次；多个消费者共享同一个实例时只有一个回调生效。
- **`GetDefaultValue()` 与 `GetValue()` 返回同一个常量 0。** 它反映不出「native 那边当前是什么值」——动作项不参与配置的读写。
- **`ManagedOptionsType.Language = 0` 这个巧合是整个 `IsAction` 逻辑的地基。** 若将来该枚举前面插入新成员，`IsAction()` 会静默失效——string 构造的实例不再被当成动作项。**这是本类最脆的跨版本假设。**
- **它属于设置界面数据层，不属于任务逻辑。** 在 `TaleWorlds.MountAndBlade.Options` 命名空间，需要 `using TaleWorlds.MountAndBlade.Options;` 与 `using TaleWorlds.Engine.Options;`（`IOptionData` 在后者）。

## 跨版本提示

`ActionOptionData.cs` 的 99 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.5.3 逐字一致，包括那个有缺陷的 managed 构造器。这意味着：**升级不会让你的代码编译失败，也不会自动修好这个 bug。**

真正会变的是它依赖的两个枚举：

- `NativeOptions.NativeOptionsType` 在 1.3.x 到 1.5.x 之间持续追加成员（DLSS、动态分辨率等），但 **`None = -1` 和 `MasterVolume = 0` 这两个头部值稳定**——否则所有 `NativeOptionData` 系列的持久化配置索引都会错位。
- `ManagedOptions.ManagedOptionsType` 也在追加，但 **`Language = 0` 同样是首位且稳定**。这正是必须盯的那条：如果哪天它前面插了成员，本类的 `IsAction()` 会在 string 构造的实例上静默返回 `false`，症状是「自定义的设置按钮在界面上变成了普通选项而不是按钮」。

另一个实践建议：**如果你要加自定义选项，优先照抄官方 `OptionsProvider.GetVideoGeneralOptions` 里 `new ActionOptionData(NativeOptionsType.X, cb)` 或 `new ActionOptionData("Id", cb)` 这两种形状**，避开 managed 那一个。

## 依赖关系

- 接口：[IOptionData](../../engine/IOptionData)（`TaleWorlds.Engine.Options` 命名空间，9 个成员，本类实现其中 6 个为常量/空；九个成员在实现处全部非 `virtual`）
- 真实构造点：[OptionsProvider](../OptionsProvider) 的 `GetVideoGeneralOptions`（`OptionsProvider.cs:21-39`），三处 `new ActionOptionData`
- 类型标记来源：[NativeOptions](../../engine/NativeOptions)（`NativeOptionsType`，`None = -1` / `MasterVolume = 0`）与 [ManagedOptions](../ManagedOptions)（`ManagedOptionsType`，`Language = 0`）
- 平行选项类型：`NativeSelectionOptionData` / `ManagedSelectionOptionData` / `NativeBooleanOptionData` / `ManagedBooleanOptionData` / `NativeNumericOptionData` / `ManagedNumericOptionData` —— 同一批被 [OptionsProvider](../OptionsProvider) 混合产出的兄弟类
- 承载容器：`OptionCategory` 与 `OptionGroup` 把这些 `IOptionData` 组织成设置页的分类与分组
- 桶首页：[mission-ext API 分区](../)