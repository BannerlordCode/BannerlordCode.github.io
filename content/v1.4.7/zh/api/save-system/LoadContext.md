---
title: "LoadContext"
description: "读取侧的反序列化执行器：按对象 ID / 容器 ID / 字符串 ID 从存档里还原对象图，并提供跨类型转换与按 ID 直取原始数据的查询入口。读档顺序问题的答案都在这里。"
---
# LoadContext

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class LoadContext`
**基类：** 无
**源文件：** `TaleWorlds.SaveSystem/Load/LoadContext.cs`（声明见第 11 行）

## 概述

`LoadContext` 是存档**读取侧**的执行器，由 [SaveManager](../SaveManager) 在 `Load` 流程中构造。它做两件事：把存档里的三张表读进内存（对象头、容器头、字符串表），然后按 [SaveContext](../SaveContext) 写入时分配的 ID **重建整棵对象图**。

读档有两个阶段，对应两个调用：`Load(loadData, loadAsLateInitialize)` 返回 `true` 表示「对象图已重建」；`loadAsLateInitialize = true` 时，行为对象（Behavior）的字段会在游戏初始化之后才恢复——这对「读档后立刻访问世界」的 mod 逻辑更安全，因为它避免了在半初始化的战役里触发 Behavior 的恢复代码。

它提供三个按 ID 直取的查询方法（`GetObjectWithId` / `GetContainerWithId` / `GetStringWithId`）——返回的是**原始的加载数据**（`ObjectHeaderLoadData` 等），不是已还原的对象。用途是调试与自定义解码。

`TryConvertType` 是它最被低估的成员：存档里存的是「类型编号 + 原始值」，当目标字段类型与存档中的类型不一致时（典型场景：mod 改了字段类型、旧档来自不同版本），转换器会尝试按可转换关系处理，而不是直接崩溃。

## 心智模型

读档的心智模型围绕**「什么时候可以安全访问世界」**：

1. **`Load` 返回之后**：对象图已存在，但**游戏实例可能还没初始化**。此时 `Game.Current` 可能为 null，`Campaign.Current` 可能半成品。
2. **`loadAsLateInitialize = true`**：Behavior 的 `SyncData(IsLoading)` 在游戏初始化之后才跑。这是给「Behavior 恢复代码要读世界」的 mod 的正确选择。
3. **想确认某个对象是否成功还原**：用 `GetObjectWithId(id)` 查原始数据，而不是去访问还原后的对象——后者可能因为反序列化失败而是 null。
4. **`TryConvertType` 是兼容性兜底**。它返回 `bool`，**必须检查**：失败时 `data` 保持原值，字段会是默认值。静默的类型转换失败正是「旧档 mod 字段全是 0」的成因。

Behavior 侧的对称要求同样在这里落地：写档时 `SaveContext` 写出的每个字段，读档时 `LoadContext` 都要能还原。**字段编号（`[SaveableField]` 的序号）一旦改动，旧档里那个位置的数据会被解释成另一种类型**——`TryConvertType` 只能救一部分情况。

## 何时使用 / 何时不要使用

- **使用**：由 `SaveManager.Load` 驱动，不需要 mod 直接构造。
- **使用**：在自定义存档格式转换器里按 ID 读取原始数据。
- **使用**：排查「某类型在存档里是否存在」时用 `GetObjectWithId`。
- **使用**：需要跨版本类型兼容时理解 `TryConvertType` 的行为。
- **不要**：不要自己 `new LoadContext(definitionContext, driver)`——它假定 `DefinitionContext` 已全局初始化。
- **不要**：不要在 `Load` 返回后立刻假设 `Campaign.Current` 可用。
- **不要**：不要把 `LoadContext` 存进静态字段。

## 成员说明

### 一、状态与构造

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public LoadContext(DefinitionContext definitionContext, ISaveDriver driver)` | 构造函数。**由存档流程调用**。自行构造会缺少已初始化的定义上下文。 |
| `object RootObject { get; private set; }` | 重建出来的根对象（通常是 `Game`）。 |
| `DefinitionContext DefinitionContext { get; private set; }` | 类型编号表。**必须与写档时完全一致**，否则字段解释错位。 |
| `ISaveDriver Driver { get; private set; }` | I/O 抽象，指向存档来源。 |

### 二、执行

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `bool Load(LoadData loadData, bool loadAsLateInitialize)` | **主流程**：把 `LoadData` 还原成对象图并设置 `RootObject`。返回 `false` 表示加载失败。`loadAsLateInitialize = true` 时行为对象延迟恢复。 |

### 三、类型转换

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static bool TryConvertType(Type sourceType, Type targetType, ref object data)` | 尝试把存档里的原始值转成目标类型。**必须检查返回值**：失败时 `data` 保持原值，调用方字段会是默认值。跨版本 / 跨 mod 的字段类型变更是唯一能被它救的场景。 |

### 四、按 ID 直取原始数据

这三个方法返回**加载数据结构**，不是已还原的对象。用于调试与自定义解码，不要拿它们当业务对象用。

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `ObjectHeaderLoadData GetObjectWithId(int id)` | 按对象 ID 取原始加载数据。**确认「某对象是否成功入档」的标准做法**——不要去访问还原后的对象，那个可能是 null。 |
| `ContainerHeaderLoadData GetContainerWithId(int id)` | 按容器 ID 取原始加载数据。 |
| `string GetStringWithId(int id)` | 按字符串 ID 取原始字符串。**ID 只在本次存档内有效**。 |

## 示例

### 示例 1：延迟初始化读档

需要「Behavior 恢复代码要访问世界数据」时选它。

```csharp
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;

LoadResult result = SaveManager.Load(saveName, driver, true);
if (result == null)
{
    return;
}

// 此时对象图已重建，但 Campaign 可能尚未初始化完成
Game game = Game.LoadSaveGame(result, gameManager);
if (game != null && game.GameType is Campaign campaign)
{
    // 初始化完成后才能安全访问世界
}
```

### 示例 2：确认某类型是否真的入了档

读档后 mod 字段是默认值时，先验证存档里有没有它。

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Load;

LoadContext context = new LoadContext(definitionContext, driver);
if (context.Load(loadData, false))
{
    // RootObject 已就绪
    object root = context.RootObject;

    // 按 ID 取原始数据：不存在时返回 null
    int id = FindObjectIdFor(root);
    if (id >= 0)
    {
        ObjectHeaderLoadData raw = context.GetObjectWithId(id);
        if (raw == null)
        {
            // 该对象根本没进存档 —— 是注册问题，不是 SyncData 问题
        }
    }
}
```

### 示例 3：理解类型转换失败的后果

`TryConvertType` 返回 false 时不要静默继续。

```csharp
using System;
using TaleWorlds.SaveSystem.Load;

object raw = ReadRawFieldValue();
object value = raw;

if (!LoadContext.TryConvertType(raw.GetType(), typeof(int), ref value))
{
    // 转换失败：value 仍是原始类型，强转会抛异常
    // 正确做法是记录并用默认值兜底
    Console.WriteLine("save field type mismatch: " + raw.GetType().Name);
}
```

## 风险与边界

- **`Load` 返回 false 就是失败**，没有部分成功这种中间态。继续执行会在后面某处以更难懂的方式崩。
- **`loadAsLateInitialize` 的取舍**。它让 Behavior 字段在游戏初始化后恢复，读取路径更长；如果你的代码在 `Load` 返回后立刻读 Behavior 字段，会读到默认值。
- **`TryConvertType` 静默失败**。返回 `false` 时 `data` 不变。**不检查返回值就强转**会在运行时抛 `InvalidCastException`，而根因在存档写入端。
- **字段编号是不可改的契约**。`[SaveableField]` 的序号改动会让旧档里该位置的数据被解释成另一种类型。`TryConvertType` 只能救可转换的情况；引用类型换引用类型则无法挽救。
- **ID 只在本次存档内有效**。`GetObjectWithId` / `GetStringWithId` 的参数不能跨存档、跨加载复用。
- **`GetObjectWithId` 返回原始数据而非对象**。它不会触发反序列化，也不会给你可安全调用的实例。
- **`RootObject` 的可用性**：`Load` 成功后存在，但它内部的子对象是否都已完成恢复取决于 `loadAsLateInitialize` 与游戏类型。
- **单线程**：反序列化会触碰整个对象图与原生资源引用，只能在主线程的加载流程里执行。
- **不可复用的实例**：`LoadContext` 与 `SaveContext` 一样只在单次存档周期内有效，存进静态字段会在下一次读档时指向已废弃的表。

## 依赖关系

- 上游 / 提供者：
  - [SaveManager](../SaveManager) 在 `Load` 流程中构造本类并注入 `ISaveDriver`。
  - [Game](../../core-extra/Game) 的 `LoadSaveGame(loadResult, gameManager)` 在本类完成对象图重建后接管。
- 相互 / 下游：
  - [SaveContext](../SaveContext) 是配对的写入侧，**字段编号必须与本类完全一致**。
  - [Campaign](../../campaign/Campaign) 在读档后重建战役世界；`SaveHandler` 参与其中。
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 的 `SyncData(IDataStore)` 在读档侧由本类驱动的数据存储支撑。
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 的实例注册表在读档后由 `ReInitialize` 重建。

## 参见

- ↑ 父级：[save-system 索引](../)
- ↔ 相关：[SaveManager](../SaveManager) · [SaveContext](../SaveContext) · [Game](../../core-extra/Game) · [Campaign](../../campaign/Campaign) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)