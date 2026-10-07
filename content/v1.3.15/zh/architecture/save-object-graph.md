---
title: "存档对象图"
description: "SaveableTypeDefiner / SaveContext / LoadContext / DefinitionContext 如何协作，自定义类如何进入存档图"
---

## 一句话定位

存档系统把游戏世界里所有需要持久化的对象，按"定义→保存→加载"三步走的方式序列化进存档文件；mod 想让自定义类进入存档图，必须给它配一个 `SaveableTypeDefiner` 子类。

## 心智模型

存档系统的核心是四个类的协作：

1. **SaveableTypeDefiner** — 定义"如何序列化一个自定义类"。它告诉存档系统：这个类有哪些字段要保存、每个字段是什么类型、用什么方式读写。每个需要存档的自定义类都要有一个对应的 Definer。
2. **SaveContext** — 保存时的上下文。它持有当前正在写入的存档流，提供 `Write` 系列方法，把对象图里的每个节点按 Definer 的定义写进去。
3. **LoadContext** — 加载时的上下文。它持有当前正在读取的存档流，提供 `Read` 系列方法，按 Definer 的定义把数据还原成对象。
4. **DefinitionContext** — 定义注册中心。它维护"类型 → Definer"的映射表，保存和加载时都靠它找到对应类型的 Definer。

一个自定义类进入存档图的完整路径：

```
定义阶段：mod 启动时，向 DefinitionContext 注册 SaveableTypeDefiner 子类
    ↓
保存阶段：游戏触发存档 → SaveContext 遍历对象图 → 遇到自定义类 → 查 DefinitionContext 找到 Definer → 按 Definer 定义写字段
    ↓
加载阶段：游戏读档 → LoadContext 遍历存档流 → 遇到自定义类标记 → 查 DefinitionContext 找到 Definer → 按 Definer 定义读字段 → 还原对象
```

**为什么 mod 要关心**：如果你的 mod 加了新的可存档类（比如自定义的 `Hero` 扩展、自定义的 `Quest` 数据），不注册 Definer 的话，存档时这个类会被静默丢弃，读档后数据丢失。

## 真实最小示例

```csharp
// 1. 定义可存档的 mod 类
public class MyModData
{
    public string Name;
    public int Value;
}

// 2. 为它写一个 Definer
public class MyModDataDefiner : SaveableTypeDefiner
{
    public MyModDataDefiner() : base(1001) { } // 唯一 ID

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(MyModData), 1);
    }

    protected override void DefineContainerDefinitions()
    {
        // 无容器字段时留空
    }

    protected override string GetContainerName()
    {
        return "MyModData";
    }
}

// 3. 在 mod 初始化时注册
public override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    new MyModDataDefiner().Register();
}
```

### 关键源码位置

| 符号 | file:行号 | 该行实际内容 |
|------|-----------|-------------|
| SaveableTypeDefiner 类声明 | `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:10` | `public abstract class SaveableTypeDefiner` |
| SaveContext 类声明 | `TaleWorlds.SaveSystem/Save/SaveContext.cs:12` | `public class SaveContext : ISaveContext` |
| LoadContext 类声明 | `TaleWorlds.SaveSystem/Load/LoadContext.cs:11` | `public class LoadContext` |

## 常见误用

1. **忘记注册 Definer**：写了 `SaveableTypeDefiner` 子类但没在 mod 初始化时调用 `Register()`，导致存档时找不到定义，自定义类被静默丢弃。
2. **Definer ID 冲突**：两个不同的 Definer 用了相同的 base ID（如 `base(1001)`），会导致存档系统行为不确定，可能覆盖或崩溃。
3. **字段类型不匹配**：Definer 里 `DefineClassTypes` 声明的字段类型与实际类不一致，保存时写入的数据和加载时读取的数据对不上，导致读档崩溃或数据错乱。
4. **容器定义遗漏**：如果自定义类里有 `List<T>` 或 `Dictionary<K,V>` 字段，必须在 `DefineContainerDefinitions` 里声明，否则这些集合字段不会被保存。

## 导航

- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel Decorator](../gamemodel-decorator) | [Mission 生命周期](../mission-lifecycle) | [UI 三层架构](../ui-three-layers)
- 相关类页: `SaveableTypeDefiner`（代码片段；链接由后续补链 pass 统一处理）

## 节 schema 声明

本页用架构 hub 形态：一句话定位=概述；心智模型=心智模型；真实最小示例=怎么用+真实示例；常见误用=心智模型展开；导航=参见。
