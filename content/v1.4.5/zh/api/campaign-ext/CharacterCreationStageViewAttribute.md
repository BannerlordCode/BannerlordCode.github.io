---
title: "CharacterCreationStageViewAttribute"
description: "角色创建阶段视图的装配标记：只带一个 StageType 字段，由 CharacterCreationScreen 反射扫描后建立「阶段类型 → 视图类型」映射。"
---

# CharacterCreationStageViewAttribute

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public sealed class CharacterCreationStageViewAttribute : Attribute`
**Base:** `System.Attribute`
**File:** `SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewAttribute.cs`

## 概述

整个类型只有**一个字段和一个构造函数**，13 行源码，是本批里最小的类型之一——但它承载的是角色创建扩展机制的**唯一注册动作**。它不带任何行为、不注册到任何全局表、不参与序列化，唯一的作用就是在编译期把「某个 `CharacterCreationStageBase` 子类」和「某个 `CharacterCreationStageViewBase` 子类」用一条声明式关系绑在一起，绑完的字典由 [CharacterCreationScreen](../CharacterCreationScreen) 在运行时反射扫描出来。

关键在于**它没有 `[AttributeUsage]`**。按 C# 规范，未标注 `AttributeUsage` 的属性类使用默认值：`AttributeTargets.All`、`AllowMultiple = false`、`Inherited = true`。三条默认值各自都有实际后果——`All` 意味着这个特性理论上能贴到任何声明上（代码里只用在 class 上，纯属约定）；`AllowMultiple = false` 意味着同一个视图类型只能声明一个 `StageType`；`Inherited = true` 与扫描端 `GetCustomAttributesSafe(item, typeof(CharacterCreationStageViewAttribute), true)` 的 `inherit: true` 参数配合，意味着**派生自某个已标注视图的子类即使自己不标注，也会继承到基类的 `StageType`**。

## 心智模型

把它当成「**一张写死在元数据里的查找表条目**」就对了。理解它只需要三个事实。

第一，**映射方向是「阶段 → 视图」，而键只能通过 `typeof` 拿到**。构造函数的参数类型是 `Type`，官方七个用法全是 `[CharacterCreationStageView(typeof(CharacterCreationBannerEditorStage))]` 这种「拿 Stage 的类型、不是拿实例」。因为 `CharacterCreationScreen.CollectStagesFromAssembly` 用 `((object)stage).GetType()` 做字典查找，**这个 `typeof` 的实参必须与运行时阶段实例的运行时类型完全一致**——写基类 `typeof(CharacterCreationStageBase)` 只会让所有阶段共用一个视图类型。

第二，**发现过程覆盖 mod 程序集**。`CollectUnorderedStages` 取 `typeof(CharacterCreationStageViewAttribute).Assembly`（即 `SandBox.View`），再用 `Extensions.GetActiveReferencingGameAssembliesSafe` 拿到所有**正在引用它**的已加载程序集，逐个 `GetTypesSafe` 扫。所以写在 mod 程序集里的视图类会被自动发现——**前提是 mod 真的引用了 `SandBox.View` 这个程序集**，只是「用了某个 SandBox 类型」并不等于引用了这个程序集。

第三，**冲突是覆盖不是报错**。`CollectStagesFromAssembly` 里写的是 `if (_stageViews.ContainsKey(stageType)) { _stageViews[stageType] = item; } else { _stageViews.Add(...) }`，同键第二次出现直接替换。结合方法名里的 `Unordered`（扫描顺序不保证），结论是：**mod 用同一个 `StageType` 覆盖官方视图属于「能跑、但胜者不可预测」的操作**，且不会有任何日志提示。

最后一个心智锚点：**这个特性不做任何校验**。它不知道视图类的构造函数长什么样（那个 10 参数形状是 `Activator.CreateInstance` 在运行时才炸的），不知道视图是否真的实现了抽象成员，也不关心 `StageType` 指向的阶段是否真的会被加进流程。所有验证都推迟到运行时，且推迟之后是**静默失败**——`OnStageCreated` 未命中就把 `_currentStageView` 置 null。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `StageType` | `public readonly Type StageType` | 这个视图要服务的阶段类型，也是 `_stageViews` 字典的键。**声明为 `public readonly` 字段而不是只读属性**，所以可以 `typeof(X)` 形式直接传进构造函数。扫描端拿它当键、拿带这个特性的视图类型当值，从而建立「阶段 → 视图」的双射。因为类型本身是 `sealed` 而字段是 `readonly`，构造之后这个值再也不会变。 |
| 构造函数 | `public CharacterCreationStageViewAttribute(Type stageType)` | 唯一构造路径，把 `stageType` 直接赋给 `StageType`，**没有 null 检查**。传 `null` 不会立刻报错，而是让字典里出现一个 null 键——后续 `OnStageCreated` 永远命中不了那个键，表现为该阶段静默无界面。 |

## 真实示例

标注一个自定义阶段视图。**参数必须是阶段类的 `typeof`，不是实例、也不是字符串**（下面是标注形式，构造函数的十个参数与七个抽象成员见 [CharacterCreationStageViewBase](../CharacterCreationStageViewBase) 页，此处省略）：

```csharp
[CharacterCreationStageView(typeof(MyOriginStage))]
public class MyOriginStageView : CharacterCreationStageViewBase
{
}
```

自己复现游戏侧的扫描逻辑（这是 `CollectStagesFromAssembly` 的等价写法，用到的两个扩展方法都在 `TaleWorlds.Library.Extensions` 上）：

```csharp
object[] attrs = typeof(MyOriginStageView).GetCustomAttributesSafe(
    typeof(CharacterCreationStageViewAttribute), true);

if (attrs.Length == 0)
{
    Debug.Print("stage view attribute missing, the stage will render nothing", 0);
    return;
}

CharacterCreationStageViewAttribute attr =
    (CharacterCreationStageViewAttribute)attrs[0];

Debug.Print("stage view registered for " + attr.StageType.Name, 0);
```

遍历整个程序集，把所有「视图基类 + 带特性」的配对收集出来——注意 `IsAssignableFrom` 这一步是为了连带接受那些继承自已标注视图、但自己没有重复标注的子类（`Inherited = true` 的直接后果）：

```csharp
foreach (Type item in typeof(MyOriginStageView).Assembly.GetTypesSafe(null))
{
    if (!typeof(CharacterCreationStageViewBase).IsAssignableFrom(item))
    {
        continue;
    }

    object[] found = item.GetCustomAttributesSafe(
        typeof(CharacterCreationStageViewAttribute), true);

    foreach (object attribute in found)
    {
        CharacterCreationStageViewAttribute mapped =
            (CharacterCreationStageViewAttribute)attribute;

        Debug.Print(item.Name + " handles " + mapped.StageType.FullName, 0);
    }
}
```

## 风险与边界

- **不写 `[AttributeUsage]`。** 三个默认值（`Targets.All` / `AllowMultiple = false` / `Inherited = true`）全靠 C# 规范兜底。想改成「必须标注在视图类上且不可继承」，得在源码里加特性——1.4.5 没有。
- **`AllowMultiple = false` 意味着一个视图类只能声明一个 `StageType`。** 一套界面想服务两个阶段类型，唯一办法是写两个视图子类各标一次。
- **`Inherited = true` 有真实的继承副作用。** 派生自已标注视图的子类即使不标注，`GetCustomAttributesSafe(..., true)` 也会返回基类的特性，于是这个子类会以**基类的 `StageType`** 被登记进字典。想覆盖界面却漏删特性，会得到两个视图抢同一个键。
- **构造函数不校验 `null`。** `new CharacterCreationStageViewAttribute(null)` 编译通过、运行通过，只是这个条目永远不会被命中。
- **`typeof` 参数错了不会立刻炸。** 键不匹配 → `OnStageCreated` 走 else 分支 → `_currentStageView = null` → 阶段推进后界面空白且无日志。
- **同键覆盖且顺序不保证。** 见心智模型第三条。
- **mod 程序集必须真正引用 `SandBox.View`。** `GetActiveReferencingGameAssembliesSafe` 找的是「引用了本程序集」的那些程序集，靠间接引用混进来类型不会被扫到。
- **`sealed` 不可继承。** 想做「基类标注 + 子类复用」的继承式扩展，只能退回到「子类也自己标一次」的写法，并接受上面说的 `Inherited` 副作用。
- **纯元数据，不参与存档。** 角色创建发生在开局，不进存档序列；改特性只影响新开局。

## 依赖关系

- 扫描方：[CharacterCreationScreen](../CharacterCreationScreen) 的 `CollectUnorderedStages` / `CollectStagesFromAssembly` 是本类型在 1.4.5 里**唯一的消费者**
- 被标注方：[CharacterCreationStageViewBase](../CharacterCreationStageViewBase) 是特性必须贴在的基类；`IsAssignableFrom` 判定用的就是它
- 键类型：[CharacterCreationStageBase](../CharacterCreationStageBase) 是 `typeof(...)` 参数必须指向的类型，`OnStageCreated` 拿它的运行时类型查字典
- 反射工具：`TaleWorlds.Library.Extensions` 的 `GetTypesSafe` / `GetCustomAttributesSafe` 与 `TaleWorlds.ModuleManager.Extensions` 的 `GetActiveReferencingGameAssembliesSafe` 是扫描链上的三个扩展方法
- 官方用例：`CharacterCreationBannerEditorView` / `CharacterCreationClanNamingStageView` / `CharacterCreationCultureStageView` / `CharacterCreationFaceGeneratorView` / `CharacterCreationNarrativeStageView` / `CharacterCreationOptionsStageView` / `CharacterCreationReviewStageView` 七个是 1.4.5 里全部的标注点，都在 `SandBox.GauntletUI.CharacterCreation` 程序集
- 阶段跳转：[CharacterCreationManager](../CharacterCreationManager) 决定哪些阶段真的会被激活——标了特性但阶段没进 `_stages` 的配对同样不会被触发
- 桶首页：[campaign-ext API 分区](../)
