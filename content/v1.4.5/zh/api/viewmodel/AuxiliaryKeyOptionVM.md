---
title: "AuxiliaryKeyOptionVM"
description: "辅助键位设置里的单行：一个 HotKey 对应一行。它按当前设备挑键位、把 Ctrl/Shift/Alt 前缀拼进描述、维护一个临时 CurrentKey 直到 OnDone 才真正写回。Set 本身是公开的，但真正的冲突仲裁发生在父分组里。"
---
# AuxiliaryKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class AuxiliaryKeyOptionVM : KeyOptionVM`  
**Base:** `KeyOptionVM`  
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys/AuxiliaryKeyOptionVM.cs`

## 概述

一个 `HotKey` 对应选项界面里的一行。它继承 `KeyOptionVM`（键位选项的通用基类），负责三件事：**按当前设备挑出该显示哪个键**、**把修饰键拼成人类可读的描述**、**在"确定"之前把改动暂存在一个临时对象里**。

构造函数（`AuxiliaryKeyOptionVM.cs:18-31`）里有一个容易忽略的设计：**它不是简单地拿 `HotKey.Keys[0]`，而是按设备筛选**：

```csharp
base.Key = (TaleWorlds.InputSystem.Input.IsGamepadActive
    ? CurrentHotKey.Keys.FirstOrDefault((Key x) => x.IsControllerInput)
    : CurrentHotKey.Keys.FirstOrDefault((Key x) => !x.IsControllerInput));
if (base.Key == null)
{
    base.Key = new Key(InputKey.Invalid);
}
base.CurrentKey = new Key(base.Key.InputKey);
```

注意 `FirstOrDefault(...)` **没有 null 元素检查**——直接 `x.IsControllerInput`。而父类 `AuxiliaryKeyGroupVM.PopulateHotKeys` 在建条目**之前**已经用 `x != null && x.IsKeyboardInput && ...` 过滤过，所以在这条路径上数组里不会有 null。**这条安全性是依赖父类的顺序保证的。**

`base.CurrentKey = new Key(base.Key.InputKey)` 是关键：**它是一个独立的新对象**，不是 `Key` 的别名。之后所有用户编辑都写在这个临时对象上，直到 `OnDone()`。

## 三层状态

理解本类的关键是它有三个"键"概念：

| 概念 | 来源 | 含义 |
| --- | --- | --- |
| `CurrentHotKey` | `public HotKey CurrentHotKey { get; private set; }`（`:16`） | 战役侧那条真实的热键记录，**只读引用**。 |
| `Key`（基类 `protected`/`public`） | 构造或 `Update()` 时按设备从 `CurrentHotKey.Keys` 选出 | **当前已保存的**键位。 |
| `CurrentKey`（基类） | 构造时 `new Key(Key.InputKey)` | **用户正在编辑的临时值**，`Set()` 改它、`OnDone()` 才写回。 |

## 心智模型

把它读成**「一个带暂存区的单行绑定编辑器；它本身不做冲突仲裁，只把请求上抛给分组」**：

- **谁 new 它**：`AuxiliaryKeyGroupVM.PopulateHotKeys()`，第 94 行 `HotKeys.Add(new AuxiliaryKeyOptionVM(key, _onKeybindRequest, SetHotKey, _getExtraInformation));`。**这是全树唯一构造点**，且是 `private` 方法内的调用。
- **谁持引用**：父分组的 `MBBindingList<AuxiliaryKeyOptionVM> HotKeys`，最终由 `GameKeyOptionCategoryVM` 持有。而**父分组通过构造时传入的 `SetHotKey` 委托被本类反向持有**——父子双向引用。
- **绑到哪个 View 属性**：**本类一个 `[DataSourceProperty]` 都没有。** 它写的全是基类 `KeyOptionVM` 的属性：`Name`、`OptionValueText`、`Description`、`ExtraInformationText`、`Key`、`CurrentKey`、`IsChanged`。这与本目录多数 VM 不同——**它是"往基类上填"的行类型**。
- **什么时候 Dispose**：继承 `KeyOptionVM`（→ `ViewModel`）的契约，由父分组或选项屏幕调 `OnFinalize()`。**本类不覆写它，也不注册任何事件**，只持有一个 `HotKey` 引用与三个回调。**所以它自身不泄漏。**
- 🔴 **`Set(InputKey)` 是公开的，但它自己不处理冲突。** 它只做两件事：`_onKeySet(this, newKey)`（转抛给父分组的 `SetHotKey`，**仲裁在那里发生**）和 `RefreshValues()`。所以"设置一个已被占用的键"到底发生什么，**取决于父分组**，而不是这一行。
- 🔴 **`ExecuteKeybindRequest()` 是私有的。**（`:72-75`）它 `_onKeybindRequest(this)`——同样是靠 Gauntlet 按名称绑定触发。**C# 侧没有公开入口发起"请重新绑定"请求。**
- 🔴 **改动在 `OnDone()` 之前不落盘。** `OnDone()`（`:95-98`）只有一行 `base.Key.ChangeKey(base.CurrentKey.InputKey);`——**它写的是 `Key`，不是 `HotKey.Keys`**。也就是说它把已保存值 `Key` 改成临时值 `CurrentKey`，真正的持久化由更上层（`HotKey` 侧）在别处完成。**调用链里少调一次 `OnDone`，界面就显示新键而实际未保存。**
- **`UpdateIsChanged()` 是 `internal` 的**（`:100-103`），**模组无法调用**。而且它写 `base.IsChanged = base.CurrentKey != base.Key;`——**这是值比较不是引用比较**，因为 `TaleWorlds.InputSystem.Key` 重写了 `operator ==`（`Key.cs:99-110`），按 `InputKey` 比较且**两侧都有 null 保护**。
- **修饰键前缀的拼接顺序是固定的。** `RefreshValues`（`:50-63`）按 `Alt` → `Shift` → `Control` 的顺序遍历，**每一轮都把已拼好的 `text3` 再包一层** `str_hot_key_with_modifier`。所以 `Ctrl+Shift+K` 会显示成 `Ctrl(Shift(K))` 那种嵌套结构，**最外层是 Alt 而不是 Ctrl**。这是原版的既有行为。
- **常见误用**：以为 `Set` 之后冲突会被拒绝。**不会**——父分组会自动对调。
- **常见误用二**：从外部 `new Key(InputKey.Invalid)` 然后比较。`Key` 的 `operator ==` 有 null 保护，但 `Key.Equals`（`:89-92`）**没有**——`return (obj as Key).InputKey == InputKey;` 在传 null 时会 NRE。**用 `==` 不要用 `Equals`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CurrentHotKey` | `public HotKey CurrentHotKey { get; private set; }`（`:16`） | 本行对应的战役侧热键记录。**只读引用**，`private set` 只在构造函数里赋一次。是本类与 `KeyOptionVM`（只有 `_groupId` / `_id` 两个字符串）之间唯一的额外上下文。 |
| 构造函数 | `public AuxiliaryKeyOptionVM(HotKey hotKey, Action<KeyOptionVM> onKeybindRequest, Action<AuxiliaryKeyOptionVM, InputKey> onKeySet, Func<AuxiliaryKeyOptionVM, string> getExtraInformation)`（`:18-31`） | 唯一构造点（`AuxiliaryKeyGroupVM.cs:94`）。向基类传 `hotKey.GroupId` / `hotKey.Id` / `onKeybindRequest`；按 `Input.IsGamepadActive` 用 `FirstOrDefault` 挑控制器/非控制器键；**挑不到就造 `new Key(InputKey.Invalid)`**；再 `CurrentKey = new Key(Key.InputKey)` 建暂存区；最后 `RefreshValues()`。 |
| `Set` | `public override void Set(InputKey newKey)`（`:77-81`） | **只转抛，不仲裁**。`_onKeySet(this, newKey)` 交给父分组的 `SetHotKey`（冲突对调在那里发生），然后 `RefreshValues()`。**被占用时不会失败，会被对调。** |
| `OnDone` | `public override void OnDone()`（`:95-98`） | **唯一的提交动作**，一行：`base.Key.ChangeKey(base.CurrentKey.InputKey);`。把临时值写进"已保存值"，**并不直接写 `HotKey.Keys`**。 |
| `Update` | `public override void Update()`（`:83-93`） | 按当前设备重新从 `CurrentHotKey.Keys` 选 `Key`（挑不到则 `InputKey.Invalid`），重建 `CurrentKey = new Key(Key.InputKey)`，然后 `UpdateIsChanged()` + `RefreshValues()`。**设备切换后用它。** |
| `RefreshValues` | `public override void RefreshValues()`（`:33-70`） | 生成全部显示文案：名称（`str_hotkey_name` + `_groupId + "_" + `_id`）、`OptionValueText`（`GetHotKeyGameTextFromKeyID`）、按 `Alt`→`Shift`→`Control` **逐层嵌套**包上 `str_hot_key_with_modifier`、`Description`（`{STR1}\n \n{STR2}`）、`ExtraInformationText`（回调生成）。 |
| `ExecuteRevert` | `public override void ExecuteRevert()`（`:105-108`） | 撤销：调 `Set(base.Key.InputKey)`——**注意它走的是 `Set`，因此会经过父分组的仲裁路径**。 |
| `ExecuteKeybindRequest` 🔴 | `private void ExecuteKeybindRequest()`（`:72-75`） | `_onKeybindRequest(this)`。**私有，靠 Gauntlet 名称绑定触发，C# 侧无公开入口。** |
| `UpdateIsChanged` 🔴 | `internal override void UpdateIsChanged()`（`:100-103`） | `base.IsChanged = base.CurrentKey != base.Key;`。**`internal`，模组无法调用。** 且这是**值比较**——`Key` 重写了 `operator ==`（`Key.cs:99-110`）按 `InputKey` 比且两侧 null 保护。 |
| `OnFocusedHealthChanged` 之类 | 不存在 | 本类**没有**血条、焦点或提示相关成员——那些在 [AgentInteractionInterfaceVM](../AgentInteractionInterfaceVM) 上。 |

## 真实示例

按当前设备取该 HotKey 应显示的键位——**这是构造函数与 `Update` 里的同一段逻辑**：

```csharp
using System.Linq;
using TaleWorlds.InputSystem;

public InputKey PickKeyForCurrentDevice(HotKey hotKey)
{
    bool gamepad = Input.IsGamepadActive;

    Key picked = gamepad
        ? hotKey.Keys.FirstOrDefault(k => k.IsControllerInput)
        : hotKey.Keys.FirstOrDefault(k => !k.IsControllerInput);

    // 挑不到就是 Invalid，这正是原版 new Key(InputKey.Invalid) 的用意。
    return picked == null ? InputKey.Invalid : picked.InputKey;
}
```

生成带修饰键前缀的显示文本——**注意嵌套包裹顺序**：

```csharp
using TaleWorlds.Core;
using TaleWorlds.InputSystem;

public string ComposeBindingText(HotKey hotKey, Key currentKey)
{
    string text = Module.CurrentModule.GlobalTextManager
        .GetHotKeyGameTextFromKeyID(currentKey.ToString().ToLower()).ToString();

    // 原版固定按 Alt -> Shift -> Control 的顺序，每一轮都把已拼好的文本
    // 再包一层 str_hot_key_with_modifier，所以最外层是 Alt。
    HotKey.Modifiers[] order =
    {
        HotKey.Modifiers.Alt,
        HotKey.Modifiers.Shift,
        HotKey.Modifiers.Control
    };

    for (int i = 0; i < order.Length; i++)
    {
        if (hotKey.HasModifier(order[i]))
        {
            MBTextManager.SetTextVariable("KEY", text);
            MBTextManager.SetTextVariable("MODIFIER", Module.CurrentModule.GlobalTextManager
                .GetHotKeyGameTextFromKeyID("any" + order[i].ToString().ToLower()).ToString());
            text = Module.CurrentModule.GlobalTextManager.FindText("str_hot_key_with_modifier").ToString();
        }
    }

    return text;
}
```

正确判断"是否已改动"——**用 `==` 不要用 `Equals`**：

```csharp
using TaleWorlds.InputSystem;

public bool IsDirty(AuxiliaryKeyOptionVM option)
{
    // Key 与 CurrentKey 都是 KeyOptionVM 的 public get / protected set 属性（KeyOptionVM.cs:33/46），
    // 所以模组可以读。
    // Key 重写了 operator == (Key.cs:99-110)，按 InputKey 值比较且两侧 null 保护。
    // 不要改用 Equals(object)：Key.Equals (:89-92) 是 (obj as Key).InputKey == InputKey，
    // 传 null 会 NRE。
    return option.CurrentKey != option.Key;
}
```

走一遍完整的"改键 → 撤销 → 提交"流程：

```csharp
public void RebindAndCommit(AuxiliaryKeyOptionVM option, InputKey newKey)
{
    // 1) 设置：经由父分组仲裁（可能被自动对调），并刷新文案
    option.Set(newKey);

    // 2) 此时还没落盘。IsDirty 用值比较判断
    if (option.CurrentKey != option.Key)
    {
        // 3) 撤销路径也走 Set，因此同样会经过父分组的仲裁
        option.ExecuteRevert();
    }

    // 4) 真正提交：把临时值写进已保存值
    option.OnDone();
}
```

## 风险与边界

- 🔴 **`Set` 不做冲突仲裁。** 它把请求转抛给父分组的 `SetHotKey`，**冲突对调在那里发生**。所以"设置一个已被占用的键"不会失败、不会提示占用，而是**被静默对调**（并弹一条 "Swapped X and Y"）。单独使用本类而没有 `AuxiliaryKeyGroupVM` 的仲裁，冲突行为完全由你传入的 `onKeySet` 决定。
- 🔴 **`ExecuteKeybindRequest()` 是私有的。** 发起"请重新绑定"的入口只能由 Gauntlet 绑定触发；C# 侧（含 `InternalsVisibleTo` 之外的程序集）没有公开路径。
- 🔴 **`UpdateIsChanged()` 是 `internal`。**（`:100`）模组无法调用，也无法可靠地自行判断"这一行是否已改动"——只能读 `IsChanged` 这个由 `Update()`/`Update()` 路径写入的缓存值。
- **`OnDone()` 不写 `HotKey.Keys`。** 它只 `base.Key.ChangeKey(base.CurrentKey.InputKey)`，改的是"已保存值"这个 `Key` 对象。更上层的持久化由 `HotKey` 侧负责。**这条链上漏掉一次 `OnDone`，界面显示与实际存储就不一致。**
- **暂存区是新对象而非别名。** `CurrentKey = new Key(Key.InputKey)`（`:29`）。这保证了编辑不会污染已保存值；代价是**任何绕过 `Set` 直接改 `CurrentKey` 的做法都会让两者脱钩**（仍然只在 `OnDone` 时提交，所以不至于写坏数据）。
- **构造函数的 `FirstOrDefault` 没有 null 元素检查。** `x.IsControllerInput` 直接解引用。安全性依赖 `AuxiliaryKeyGroupVM.PopulateHotKeys` 先用 `x != null && ...` 过滤过。**单独构造本类并传入含 null 元素的 `Keys` 数组会在构造期 NRE。**
- **`Key.Equals` 不做 null 保护，`operator ==` 做了。** `Key.cs:89-92` 的 `Equals` 是 `(obj as Key).InputKey == InputKey`，传 null 直接 NRE；`Key.cs:99-110` 的 `operator ==` 两侧都判了 null。**统一用 `==` / `!=`。**
- **修饰键文案是嵌套包裹的**，顺序固定 `Alt` → `Shift` → `Control`，最外层是 Alt。对 `Ctrl+Shift+K` 这类多修饰键组合，显示形态是 `Alt(Shift(K))` 这种嵌套。**不是 bug，但是原版行为。**
- **无监听器、无 `OnFinalize` 覆写** → **本类自身不泄漏**。它持有一个 `HotKey` 引用与三个回调，其中 `SetHotKey` 委托捕获父分组——**父子双向持有**，所以任一方被长期缓存都会连带留住另一方。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。绑定的持久化在 `HotKey` 侧。
- **本类没有任何 `[DataSourceProperty]`。** 全部绑定面向基类 `KeyOptionVM` 的属性。改名基类属性会同时影响所有这一层。
- **native 边界**：本类纯托管，但其下游 `HotKey` / `Input` / `Key` 属 `TaleWorlds.InputSystem`，最终会触及输入系统存储。
- **跨版本**：`str_hotkey_name` / `str_hotkey_description` / `str_hot_key_with_modifier` 三个文本键、`HotKey.Modifiers` 的三个取值、以及 `Key` 的 `operator ==` / `Equals` 两个重载是 v1.4.5 的形状。

## 依赖关系

- ↑ 父类：[KeyOptionVM](../KeyOptionVM) —— 提供 `Name` / `Key` / `CurrentKey` / `IsChanged` / `OptionValueText` / `Description` / `ExtraInformationText` 这些绑定面
- ↔ 同级：[AuxiliaryKeyGroupVM](../AuxiliaryKeyGroupVM) —— **唯一的构造方**（`AuxiliaryKeyGroupVM.cs:94`），也是**冲突仲裁的执行者**（`SetHotKey` 作为委托传入）
- ↔ 同级：[GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM) —— 上一层持有者，提供 `_onKeybindRequest` 与 `GetExtraInformationText`
- → 键位数据：[HotKey](../../campaign-ext/HotKey)、[Key](../../campaign-ext/Key)、[InputKey](../../campaign-ext/InputKey)
- → 文本：[GameTextManager](../../core-extra/GameTextManager) 与 [Module](../../core/Module) 的 `GlobalTextManager`
- → 输入状态：`TaleWorlds.InputSystem.Input.IsGamepadActive`（设备判定的唯一来源）
