---
title: "ListAdvancedStartOption"
description: "Auto-generated class reference for ListAdvancedStartOption."
---
# ListAdvancedStartOption

**Namespace:** SandBox.AdvancedStartOptions
**Module:** SandBox
**Type:** `public class ListAdvancedStartOption : AdvancedStartOption `
**Base:** AdvancedStartOption
**Source:** SandBox/AdvancedStartOptions/ListAdvancedStartOption.cs

## Overview

Auto-generated stub for `ListAdvancedStartOption`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetItems
`public IReadOnlyList<ValueTuple<string,ListAdvancedStartOption.ListItemCondition>> GetItems()`

### AddItem
`public void AddItem([TupleElementNames(new string[] { "Identifier","Condition" })] ValueTuple<string,ListAdvancedStartOption.ListItemCondition> item)`

### GetItemCondition
`public bool GetItemCondition(string identifier,AdvancedStartOptions options,out TextObject disabledText)`

### RemoveItem
`public bool RemoveItem(string identifier)`

### ListItemCondition
`public delegate bool ListItemCondition(AdvancedStartOptions options,out TextObject disabledText)`

## See Also

- [Section index](../)
