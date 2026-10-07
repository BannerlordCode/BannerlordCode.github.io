---
title: "NameplateSize"
description: "名牌尺寸档位的枚举，嵌套在 NameplateVM 里且是 protected：三个成员在 v1.4.5 全树零引用，是给派生 ViewModel 预留的扩展点。"
---

# NameplateSize

**Namespace:** `SandBox.ViewModelCollection.Nameplate`（嵌套在 `NameplateVM` 内）
**Module:** SandBox
**Type:** `protected enum NameplateSize`（嵌套于 `public class NameplateVM`）
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/NameplateVM.cs`

## 概述

`NameplateSize` 是 `NameplateVM` 里的**嵌套 `protected` 枚举**，声明在 `NameplateVM.cs:8-13`（`:8` 是 `protected enum NameplateSize`，三个成员在 `:10`/`:11`/`:12`）。它不是一个顶层类型——C# 里要写它的全名必须是 `NameplateVM.NameplateSize`，而因为它是 `protected`，**只能在 `NameplateVM` 的派生类里引用**。

**在 v1.4.5 源码树里它没有任何消费点。** 对整个 `bannerlord-1.4.5/Bannerlord.Source` 执行 `grep -rn "NameplateSize"` 只命中一处：`NameplateVM.cs:8` 的声明本身。`NameplateVM` 本类 158 行里也没有用到它。

## 心智模型

把它当成**「预留的档位表」**。三条推论：

第一，**它存在是因为名牌是要缩放的，而缩放方式留给派生类。** `NameplateVM` 有两个公开可写的缩放量——`Scale`（`NameplateVM.cs:29`，`double`）与 `NameplateOrder`（`:31`，`int`），都是无约束的数值；**`NameplateSize` 提供了「三档」这个语义化入口，让不同分辨率下的名牌有一致的粗细，而不是各写各的浮点数。**

第二，**它和 `Scale` 没有连线。** `NameplateVM` 没有任何代码把 `NameplateSize` 折成 `Scale`。**所以这不是「设置尺寸」的 API，而是一组还没被接线的常量名。** 想让名牌变大，现状只能直接写 `vm.Scale = 1.5f`。

第三，**声明顺序即语义。** `Small` / `Normal` / `Big` 的序号是 0/1/2（`NameplateVM.cs:10`/`:11`/`:12`），`Normal` 恰在中间——**这意味着它被设计成可以 `(int)` 强转后与「期望档位」直接比较或做索引。** 这一点与 [ArithmeticOperation](../../localization/ArithmeticOperation/) 那类「靠 int 强转传递信息」的枚举同源，但**本枚举在 v1.4.5 里根本没有这种用法**。

边界：**`protected` 嵌套枚举**，编译期只能在 `NameplateVM` 的派生类里引用；**mod 若不派生 `NameplateVM`，就完全看不到它**（含反射之外的一切手段）。

## 如何使用

**怎么拿到它**：它没有构造点，只有声明。派生 `NameplateVM` 就能在类体内直接写 `NameplateSize.Big`；不派生则拿不到类型。

派生一个名牌 ViewModel 并把档位折成缩放值——**注意这个换算公式必须你自己写，引擎没有**：

```csharp
using SandBox.ViewModelCollection.Nameplate;

public class MyBannerNameplateVM : NameplateVM
{
    private NameplateSize _size = NameplateSize.Normal;

    // 自己接档位到 Scale 的线：引擎不提供这条映射
    public void ApplySize(NameplateSize size)
    {
        _size = size;
        Scale = size switch
        {
            NameplateSize.Small => 0.7d,
            NameplateSize.Normal => 1.0d,
            NameplateSize.Big => 1.4d,
            _ => 1.0d,
        };
    }

    public string Describe() => "size=" + _size + " scale=" + Scale;
}
```

**用它最容易踩的一条**：**在 v1.4.5 里它是零消费的死枚举，所以「按档位改名牌」这件事根本不存在。** 你写完 `ApplySize(NameplateSize.Big)` 会发现 UI 没变化——不是档位算错了，而是**引擎里没有任何代码读取这个字段**。真正的名牌缩放走 `NameplateVM.Scale`（`NameplateVM.cs:29`，`double` 可写属性），颜色走 `FactionColor`（`:33`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Small` | `Small`（枚举成员，序号 0，`NameplateVM.cs:10`） | 最小档。**v1.4.5 零消费点。** 语义靠命名约定：对应 `Scale` 小于 1。 |
| `Normal` | `Normal`（枚举成员，序号 1，`NameplateVM.cs:11`） | 常规档，**声明在中间**。**零消费点。** |
| `Big` | `Big`（枚举成员，序号 2，`NameplateVM.cs:12`） | 最大档。**零消费点。** |

## 真实示例

确认它在 v1.4.5 里没有第二个引用点——这是本页最重要的事实，用反射查类型而非假设：

```csharp
using SandBox.ViewModelCollection.Nameplate;

// NameplateVM 是 public，嵌套枚举是 protected：
// 编译期在外部拿不到 NameplateSize 类型，反射是唯一途径
Type vmType = typeof(NameplateVM);
Type nested = vmType.GetNestedType("NameplateSize", BindingFlags.NonPublic | BindingFlags.Public);
Debug.Print("nested type = " + (nested == null ? "null" : nested.FullName), 0);

if (nested != null)
{
    string[] names = Enum.GetNames(nested);
    Debug.Print("members = " + string.Join(", ", names), 0);
    Debug.Print("underlying = " + Enum.GetUnderlyingType(nested).Name, 0);
}
```

真正能生效的那条路——直接写 `Scale`，不碰这个枚举：

```csharp
using SandBox.ViewModelCollection.Nameplate;

NameplateVM plate = new NameplateVM();
plate.Scale = 1.4d;                                  // 真正生效的缩放入口
plate.FactionColor = "#B22222";                      // 阵营色，写入会触发 OnPropertyChanged
plate.IsVisibleOnMap = true;
Debug.Print("scale=" + plate.Scale + " order=" + plate.NameplateOrder, 0);
```

## 风险与边界

- **`protected` 嵌套枚举，编译期只有派生类可见。** mod 不派生 `NameplateVM` 就写不出 `NameplateSize.Big` 这个符号。
- **v1.4.5 全树零消费点。** `grep -rn "NameplateSize"` 在 `bannerlord-1.4.5/Bannerlord.Source` 下只命中声明行 `NameplateVM.cs:8`。**依赖它等于依赖一个没有行为的常量。**
- **它与 `Scale` 之间没有连线。** `NameplateVM` 任何一行都没读它。**「设置档位」不会改变任何 UI。**
- **同一个枚举名在别处也有。** `Seasons` 那类同名类型要靠命名空间区分，写 `using` 时别引错。
- **`NameplateVM` 的可写属性都有 `OnPropertyChanged` 副作用**：`FactionColor` 在 `:44`、`DistanceToCamera` `:60`、`IsVisibleOnMap` `:76`、`IsTargetedByTutorial` `:92`（它还额外通知 `ShouldShowFullName` `:93` 与 `IsTracked` `:94`）、`Position` `:116`、`CanParley` `:132`。**而 `Scale`（`:29`）与 `NameplateOrder`（`:31`）是自动属性，不通知** —— **UI 绑定在它们上面不会自动刷新。**

## 参见

- 宿主类：[NameplateVM](../../campaign-ext/NameplateVM/)（158 行，本枚举的声明处在第 8-13 行；`Scale` `:29`、`NameplateOrder` `:31`、`FactionColor` `:33`）
- 同桶：[MapAudioManager](../MapAudioManager/)、[ArenaPreloadView](../ArenaPreloadView/)、[SandBoxEditorMissionTester](../SandBoxEditorMissionTester/)——同为「名字很大但职责很窄」的辅助类型，可作对照
- 同类零消费枚举的对照：[BooleanOperation](../../localization/BooleanOperation/)（`MBTextParser.cs:591` 有映射函数但零调用者）
- 桶首页：[gameplay API 分区](../)