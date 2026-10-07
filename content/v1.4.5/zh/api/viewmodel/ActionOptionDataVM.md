---
title: "ActionOptionDataVM"
description: "通用选项界面里的一行「立即执行」按钮。它继承 GenericOptionDataVM 并把六个数值型虚方法全部覆写成空实现——这一行没有值、没有改动、没有存档；只有一个私有 ExecuteAction 供 Gauntlet 绑定，以及一个 ActionName 按钮文案。"
---
# ActionOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`  
**Base:** `GenericOptionDataVM`  
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ActionOptionDataVM.cs`

## 概述

通用设置面板（`OptionsVM`）里的选项分好几种形态：布尔开关、数值滑块、下拉选择，以及**"点了就执行"的动作按钮**。`ActionOptionDataVM` 就是最后那一种的视图模型。

它对基类 `GenericOptionDataVM` 做了一件很特别的事：**把基类的六个数值型抽象方法全部覆写成空实现**。

| 基类抽象成员 | 本类实现 |
| --- | --- |
| `public abstract void UpdateValue()` | `{}` |
| `public abstract void Cancel()` | `{}` |
| `public abstract bool IsChanged()` | `return false;` |
| `public abstract void SetValue(float value)` | `{}` |
| `public abstract void ResetData()` | `{}` |
| `public abstract void ApplyValue()` | `{}` |

这不是偷懒，而是类型契约的直接后果：**这一行没有值**。`IsChanged()` 恒为 `false` 尤其重要——它意味着"应用/确定"按钮永远看不到"有未保存改动"，所以动作行的执行是立即生效的，不经过任何 apply/revert 流程。

真正属于它的状态只有三样：一个 `private readonly Action _onAction`、一个 `private readonly TextObject _optionActionName`，以及一个 `[DataSourceProperty] public string ActionName`。

构造函数把类型标记传给基类：`OptionsVM.OptionsDataType.ActionOption`。这一个参数决定了通用选项面板按按钮而不是按控件来渲染它。

## 心智模型

把它读成**"通用选项面板的一个按钮外壳，唯一真正的行为是一个私有方法"**：

- **谁 new 它**：`OptionsVM`，在从 `TaleWorlds.MountAndBlade.Options.ActionOptionData`（一个 `IOptionData`）转换出视图行时。两处调用点形状相同：`return new ActionOptionDataVM(actionOptionData.OnAction, this, actionOptionData, name, optionActionName, textObject);`
- **谁持引用**：`OptionsVM` 内部的选项行集合。父类 `GenericOptionDataVM` 构造时已经拿到了 `OptionsVM optionsVM` 与 `IOptionData option` 两个引用，本类不额外持有。
- **绑到哪个 View 属性**：`ActionName`（按钮上的文字）。以及——这一点很反直觉——**`ExecuteAction` 是 `private` 的**。Gauntlet 的数据绑定按名称查找成员，不受可见性限制，所以 prefab 里就是直接绑 `ExecuteAction`。C# 侧没有任何公开入口能触发它。
- **什么时候 Dispose**：继承 `ViewModel` 的契约，由 `OptionsVM` 在选项面板关闭时调用 `OnFinalize()`。本类**没有覆写 `OnFinalize`**，不注册任何事件，因此不产生泄漏。
- **`_optionActionName` 为 null 是允许的**。`RefreshValues()` 里有一层 `if (_optionActionName != null)` 保护，为 null 时 `ActionName` 保持上一次的字符串（构造时是 `null`）。所以按钮文字**可能整个为空**——这不是 bug，是原版的容错分支。
- **构造函数会主动调 `RefreshValues()`**。这与本桶多数 VM 不同（多数等框架在合适时机调）。原因大概是 `ActionName` 必须在对象可绑定之前就有值。
- **常见误用一**：想从代码里触发这一行。你做不到——`ExecuteAction` 是私有的。要触发只能通过绑定它的那个 widget，或者重新设计你的选项类型让它暴露公开入口。
- **常见误用二**：把它当成可以复用成"确认对话框按钮"的通用类。`IsChanged()` 恒 false、`ApplyValue()` 空、`Cancel()` 空这一组意味着它和"有状态、可回滚"的选项**语义完全不同**，混用会让 `OptionsVM` 的确定/重置逻辑做出错误判断。
- **`DynamicInvokeWithLog()` 而非 `Invoke()`**。这是 `TaleWorlds.Library` 的扩展方法，用反射调委托并把异常包装记录后再抛。相比直接 `Invoke()`，它的好处是委托内部抛出的异常会带上目标方法信息——代价是走反射，慢一点，且**仍然会把异常抛出来**，不会吞掉。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public ActionOptionDataVM(Action onAction, OptionsVM optionsVM, IOptionData option, TextObject name, TextObject optionActionName, TextObject description)` | 由 `OptionsVM` 调用。向基类传 `OptionsVM.OptionsDataType.ActionOption` 作为类型标记，保存动作与按钮文案两个只读字段，然后**主动调一次 `RefreshValues()`** 让 `ActionName` 立刻可用。 |
| `ActionName` | `[DataSourceProperty] public string ActionName` | 按钮上显示的文字。唯一属于本类的绑定属性，由 `RefreshValues()` 从 `_optionActionName` 转出。 |
| `RefreshValues` | `public override void RefreshValues()` | 调基类刷新，然后**仅当 `_optionActionName != null`** 时把它转成字符串写进 `ActionName`。null 时不写，按钮文字保持旧值。 |
| `ExecuteAction` | `private void ExecuteAction()` | 真正的行为：`_onAction?.DynamicInvokeWithLog()`。**私有，但被 Gauntlet 按名称绑定**——这是 C# 侧无法直接触发它的原因。 |
| `Cancel` / `ResetData` / `SetValue` / `UpdateValue` / `ApplyValue` | 五个 `public override void ...`，全部空实现 | 声明"这一行没有可回滚的值"。**不是遗漏**：基类是抽象方法，必须实现。 |
| `IsChanged` | `public override bool IsChanged()` | 恒返回 `false`。让通用选项面板的"确定"按钮不会因为这一行而变成可用状态，强制动作立即生效。 |
| `_onAction` | `private readonly Action _onAction` | 从 `ActionOptionData.OnAction` 传入的委托，只被 `ExecuteAction` 读一次。 |
| `_optionActionName` | `private readonly TextObject _optionActionName` | 按钮文案的原始 `TextObject`。**只读且可变引用**：语言切换后需要外部重新 `RefreshValues()` 才会反映。 |

## 真实示例

从选项数据构造视图行——这是 `OptionsVM` 自己做的事：

```csharp
using TaleWorlds.Engine.Options;
using TaleWorlds.MountAndBlade.Options;
using TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions;

// OptionsVM 内部就是这样把一个 ActionOptionData 变成一行的
public ActionOptionDataVM CreateActionRow(IOptionData optionData)
{
    ActionOptionData actionData = optionData as ActionOptionData;
    if (actionData == null)
    {
        return null;
    }

    TextObject name = GameTexts.FindText(actionData.Name);
    TextObject description = GameTexts.FindText(actionData.Description);
    TextObject actionLabel = GameTexts.FindText(actionData.OptionActionName);

    return new ActionOptionDataVM(actionData.OnAction, this, actionData, name, actionLabel, description);
}
```

自定义一个自己的动作选项数据（继承 `ActionOptionData` 那一侧），让面板能认出它：

```csharp
public class MyActionOptionData : ActionOptionData
{
    public MyActionOptionData(string name, string description, string optionActionName, Action onAction)
        : base(name, description, optionActionName, onAction)
    {
    }
}
```

在动作行里安全地触发同一段逻辑（因为 `ExecuteAction` 是私有的，模组只能通过自己持有的委托来驱动）：

```csharp
public class MyOptionsRowFactory
{
    private readonly Action _onPickLoadOrder;

    public MyOptionsRowFactory(Action onPickLoadOrder)
    {
        _onPickLoadOrder = onPickLoadOrder;
    }

    public ActionOptionDataVM Build(OptionsVM optionsVM, IOptionData optionData)
    {
        ActionOptionData actionData = optionData as ActionOptionData;
        if (actionData == null)
        {
            return null;
        }

        TextObject label = GameTexts.FindText("str_my_options_pick_load_order");
        return new ActionOptionDataVM(_onPickLoadOrder, optionsVM, actionData, label, label, TextObject.GetEmpty());
    }

    public void Trigger()
    {
        _onPickLoadOrder?.DynamicInvokeWithLog();
    }
}
```

## 风险与边界

- **`ExecuteAction` 私有是刻意的 API 边界**。C# 侧（含反射之外的正常调用）没有任何公开路径触发它。想在代码里点这个按钮，唯一稳定的方式是自己保留一份 `ActionOptionData.OnAction` 委托并直接调它——这会绕过面板的全部状态判定。
- **六个空覆写不是 bug，是契约**。`GenericOptionDataVM` 把它们声明为抽象。任何把 `ActionOptionDataVM` 当作基类、试图复用其"选项行"行为的子类，都会继承一组语义为空的实现；特别是 `IsChanged()` 恒 false 会让子类无法表达"有未保存改动"。
- **`DynamicInvokeWithLog` 用反射调委托并记录后重抛**。它比 `Invoke()` 慢（每次一次反射调用），且**不会吞异常**。若动作里抛异常，异常会穿过 Gauntlet 的绑定调用栈冒到面板层。动作里应自行 try/catch。
- **无状态 = 无存档钩子**。本类型没有 `SyncData`、不实现任何序列化接口、不与 `IDataStore` 交互。它代表的动作要么当场生效，要么由动作自己负责持久化。`OptionsVM` 的存档路径只处理有值的选项。
- **没有覆写 `OnFinalize`**，因此不注册也不解绑任何东西。生命周期干净，唯一持有的引用是两个只读委托/文本对象加上基类的 `OptionsVM` 与 `IOptionData`。
- **`ActionName` 可能为空**。`_optionActionName` 为 null 时 `RefreshValues()` 不写 `ActionName`。若你的数据源漏填按钮文案，得到的是一个文字为空的按钮而不是异常。
- **语言切换不会自动刷新**。`_optionActionName` 是 `readonly` 的 `TextObject` 引用，`ActionName` 是构造时转好的字符串快照。要跟随语言切换必须显式再调一次 `RefreshValues()`。
- **native 边界**：无。纯托管。底层 `TaleWorlds.MountAndBlade.Options.ActionOptionData` 会触及 native 选项存储，但那是数据侧的职责，本视图模型本身不碰。
- **跨版本**：`OptionsVM.OptionsDataType.ActionOption` 与 `GenericOptionDataVM` 的六个抽象成员形状都是 v1.4.5 的取值。若上游给 `GenericOptionDataVM` 增加新的抽象成员，本类会**编译失败**而不是静默退化——这是好事。

## 依赖关系

- ↑ 父类：[GenericOptionDataVM](../GenericOptionDataVM) —— 定义那六个抽象成员与选项行通用状态
- ↔ 同级：[OptionsVM](../OptionsVM) —— 唯一的构造方，并提供 `OptionsDataType.ActionOption` 类型标记
- ↔ 同级：[ActionCampaignOptionData](../ActionCampaignOptionData) —— 战役侧同形的"动作行"，可与本类对照阅读
- ↔ 同级：[CampaignOptionsControllerVM](../CampaignOptionsControllerVM) —— 战役设置面板的对应控制器
- → 选项数据接口：`IOptionData`（zh: [../../engine/IOptionData](../../engine/IOptionData)）与 `TaleWorlds.MountAndBlade.Options.ActionOptionData`
- → 委托执行扩展：`DynamicInvokeWithLog`（`TaleWorlds.Library`）
- ↑ 文本查找：[GameTextManager](../../core-extra/GameTextManager)
- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel)
